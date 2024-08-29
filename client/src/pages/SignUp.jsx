import React from "react";
import "../styles/Signup.css";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

export default function SignUp() {
  return (
    <div className="container">
      <div className="box-1">
        <form className="frm">
          <div className="title">Sign Up</div>
          <div className="input">
            <div>Username</div>
            <input type="text" id="username" />
          </div>
          <div className="input">
            <div>Email</div>
            <input type="email" id="email" />
          </div>
          <div className="input">
            <div>Password</div>
            <input type="password" id="password" />
          </div>
          <button>Sign Up</button>
          <button>
            <span className="icon">
              <FaGoogle />
            </span>
            Continue with Google
          </button>
          <div className="text">
            Already have an account? <Link to="/sign-in">Sign In</Link>
          </div>
        </form>
      </div>
      <div className="box-2"></div>
    </div>
  );
}
