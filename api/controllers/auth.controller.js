import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorhandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorhandler(400, 'All fields are required!'));//used errorhandler created in error.js and middleware 'next'
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  //importing the User model created in user.model.js
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("Signup successfull!");
  } catch (error) {
    //res.status(500).json({ message: "Username or email should be unique!" }); instead of this line we can add our middleware 'next' to handle error
      next(error);
  }
};
