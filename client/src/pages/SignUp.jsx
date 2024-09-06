import React, { useState } from "react";
import "../styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
const navigate = useNavigate();

  const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.id] : e.target.value.trim()});  
  }
const handleSubmit = async (e) =>{
  e.preventDefault();
  if(!formData.username || !formData.email || !formData.password)
  {
    return setErrorMessage('Please fill out all fields.');
  }
  try {
    setLoading(true);
    setErrorMessage(null);
    const res = await fetch(`api/auth/sign-up`, {
      method: 'POST',
      headers : { 'Content-Type' : 'application/json'},
      body : JSON.stringify(formData)
    })
    const data = await res.json();
    if(data.success === false)
    {
      return setErrorMessage(data.message);
    }
    setLoading(false);
    if(res.ok){
      navigate('/sign-in');
    }
  } catch (error) {
    setErrorMessage(error.message);
    setLoading(false);
  }
}    

  return (
    <div className="container">
      <div className="box-1">
        <form className="frm" onSubmit={handleSubmit}>
          <div className="title">Sign Up</div>
          <div className="input">
            <div>Username</div>
            <input type="text" id="username" onChange={handleChange} />
          </div>
          <div className="input">
            <div>Email</div>
            <input type="email" id="email" onChange={handleChange} />
          </div>
          <div className="input">
            <div>Password</div>
            <input type="password" id="password" onChange={handleChange} />
          </div>
          <button  className="btn" disabled={loading}>
            {
              loading ? (
                <>
                <span className="spinner"></span>Loading...
              </>
              ) : 'Sign Up'
            }
          </button>
          <button className="btn google-btn">
            <span className="icon">
              <FaGoogle />
            </span>
            Continue with Google
          </button>
          <div className="text">
            Already have an account? <Link to="/sign-in">Sign In</Link>
          </div>
          {errorMessage && (
  <div className="alert">
    {errorMessage}
  </div>
)}
       </form>
      </div>
      <div className="box-2"></div>
    </div>
  );
}
