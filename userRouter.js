import express from "express";
import {createUser,getUser}from "./userController.js";


const router = express.Router();

router.post("/register",createUser);
router.get("/user",getUser);

export default router;

