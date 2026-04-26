import express from "express";
import mongoose from "mongoose";
import router from "./userRouter.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());

app.use("/api",router);

const mongo = process.env.MONGO;
const port = process.env.PORT || 5001;

mongoose.connect(mongo)
  .then(() => {
    console.log("Database Connected...");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Fail connect DB...", err.message);
  });
app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});