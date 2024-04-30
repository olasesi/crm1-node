import { Request, Response, NextFunction } from "express";
import { validationResult, body } from "express-validator";
import bcrypt from "bcrypt";
import User from "./../../database/models/User";
import jwt from "jsonwebtoken";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Define validation rules
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { password, email } = req.body;

    // Add validation rule for email address
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Invalid email address")
      .run(req);

    // Check for validation errors after adding the validation rule
    const emailErrors = validationResult(req);
    if (!emailErrors.isEmpty()) {
      return res.status(400).json({ errors: emailErrors.array() });
    }

    // Continue with authentication
    const user = await User.findOne({ email: email, active: true });

    if (!user) {
      return res.status(401).json({
        status: 401,
        message: "User not found or account is not active",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect) {
      const accessToken = jwt.sign(
        { id: user._id, userType: user.userType },
        process.env.ACCESS_TOKEN_SECRET as string,
        { expiresIn: "15m" }
      );

      // Generate Refresh Token
      const refreshToken = jwt.sign(
        { id: user._id, userType: user.userType },
        process.env.REFRESH_TOKEN_SECRET as string,
        { expiresIn: "30d" } // Set refresh token expiration
      );

      // Attach Refresh Token to HTTPOnly Cookie
      res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
        secure: true, // Enable in production for HTTPS
        sameSite: "strict", // Add for enhanced security
      });

      // Return Access Token in Response Body
      const { password, ...otherDetails } = user.toObject();
      res.status(200).json({ accessToken, ...otherDetails });
    } else {
      // Password is incorrect
      return res.status(401).json({
        status: 401,
        message: "Email or Password is not correct",
      });
    }
  } catch (err) {
    next(err);
  }
};
