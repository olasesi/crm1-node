import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING as string);
    console.log("connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

const disconnection = async () => {
  mongoose.disconnect();
};

const isConnected = () => {
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
  });
};
export { connection, disconnection, isConnected };
