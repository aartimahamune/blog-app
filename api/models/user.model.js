import mongoose from "mongoose";
//to set the rules for user we use schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestam: true }
);

//creating model to and using the schema
const User = new mongoose.model("User", userSchema);

export default User;
