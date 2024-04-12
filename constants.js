import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const DB_NAME = "netflix"
export const PORT = Number(process.env.PORT);
export const MONGO_URI = process.env.MONGO_URI;
export const CORS_ORIGIN = process.env.CORS_ORIGIN;