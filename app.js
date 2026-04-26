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

const mongo=process.env.mongo;
const port =process.env.port;

mongoose.connect(mongo).then(()=>{
    console.log("Database Connected...");

}).catch((err)=>{
    console.log("Fail.connect DB...");
});

app.listen(port,()=>{
    console.log("server run port 5001...!")
});