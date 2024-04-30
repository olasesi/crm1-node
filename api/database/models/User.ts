import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  active: boolean;
  userType: string;
}

const UserSchema: Schema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please provide your first name"],
    },
    lastname: {
      type: String,
      required: [true, "Please provide your last name"],
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
    },
    active: {
      type: Boolean,
      default: false,
      required: true,
    },
    userType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserType",
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
