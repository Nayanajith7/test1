import mongoose from "mongoose";

const user=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

const User =mongoose.model("test",user);
export default User;