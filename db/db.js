import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { MONGO_URI } from "../constants.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGO_URI}/${DB_NAME}`
    );
    console.log(`\n MongoDB connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MONGODB connection error", error);
    process.exit(1);
  }
};
