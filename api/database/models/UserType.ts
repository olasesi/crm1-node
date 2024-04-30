import mongoose, { Document, Schema } from "mongoose";

interface IUserType extends Document {
  name: string;
}

const UserTypeSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUserType>("UserType", UserTypeSchema);
