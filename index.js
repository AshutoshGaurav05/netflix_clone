import express from "express";
import cors from "cors";
import { connectDB } from "./db/db.js";
import { PORT, CORS_ORIGIN } from "./constants.js";

const app = express();

app.use(cors({ origin: CORS_ORIGIN, credentials: true }));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.get("/", (req, res) => {
  res.send("Netflix Clone API created by Ashutosh Gaurav");
});

connectDB()
  .then(() => {
    app.listen(PORT || 8000, () => {
      console.log(`Server is running on port : ${PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed", err);
  });
