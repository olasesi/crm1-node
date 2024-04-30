import express from "express";
import { login } from "../../controllers/AuthController/AuthController";

const router = express.Router();

router.post("/", login);

export default router;

// import express from "express";
// import {
//   updateUser,
//   deleteUser,
//   getUser,
//   getUsers,
// } from "../controllers/user.js";
// import { verifyToken, verifyUser } from "../utils/verifyToken.js";

// const router = express.Router();

// router.get("/checkauthenication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are logged in");
// });

// router.get("/checkuser:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, you are logged in and can delete your account");
// });

// //UPDATE
// router.put("/:id", updateUser);

// //DELETE
// router.delete("/:id", deleteUser);

// //GET
// router.get("/:id", getUser);

// //GET ALL
// router.get("/", getUsers);

// export default router;
