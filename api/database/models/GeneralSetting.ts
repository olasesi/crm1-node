import mongoose, { Document, Schema } from "mongoose";

interface IGeneral extends Document {
  companyName: string;
  companyMainDomain: string;
  adminAreaRTL: boolean;
  customerAreaRTL: boolean;
  logoImagePath: string | null;
  faviconImagePath: string | null;
  allowedFileTypes: string[];
}

const generalSchema: Schema = new Schema(
  {
    companyName: {
      type: String,
      default: null,
    },
    companyMainDomain: {
      type: String,
      default: null,
    },
    adminAreaRTL: {
      type: Boolean,
      default: false,
    },
    customerAreaRTL: {
      type: Boolean,
      default: false,
    },
    logoImagePath: {
      type: String,
      default: "/default/dafaultimage.png", //To add default image later
    },
    faviconImagePath: {
      type: String,
      default: "/default/favicon.png", //To add default favicon later
    },
    allowedFileType: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model<IGeneral>("GeneralSetting", generalSchema);
