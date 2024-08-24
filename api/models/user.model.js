import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
    username: {
        type: String,
        required:true,
        unique:true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: Strinf,
        required:true,
        unique:true
    }
}, {timestam:true}
);

const User = new mongoose.model('User', userSchema);

export default User;