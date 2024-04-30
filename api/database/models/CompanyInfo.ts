import mongoose, { Document, Schema } from "mongoose";

interface ICompanyInfo extends Document {
  companyName: string;
  address: string;
  state: string;
  city: string;
  country: string;
  zipCode: string;
  postalCode: string;
  phone: string;
}

const companyInfo: Schema = new Schema(
  {
    companyName: {
      type: String,
      default: null,
    },
    address: {
      type: String,
      default: null,
    },
    state: {
      type: String,
      default: null,
    },
    city: {
      type: String,
      default: null,
    },
    country: {
      type: String,
      default: null,
    },
    zipCode: {
      type: String,
      default: null,
    },
    postalCode: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ICompanyInfo>("CompanyInfo", companyInfo);
