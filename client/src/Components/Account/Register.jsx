import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./mix.css";

const Register = () => {
  const [inpVal, setInpval] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const setVal = (e) => {
    const { name, value } = e.target;

    setInpval({
      ...inpVal,
      [name]: value,
    });
  };
  console.log(inpVal);

  const registerUser = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = inpVal;

    if (name === "") {
      alert("Please enter your name...");
    } else if (email === "") {
      alert("Please Enter your email");
    } else if (!email.includes("@")) {
      alert("Invalid Email");
    } else if (password === "") {
      alert("please fill the field");
    } else if (password.length < 6) {
      alert("Password should be atleast 6 characters long");
    } else if (cpassword === "") {
      alert("please confirm Password");
    } else if (cpassword.length < 6) {
      alert("please enter your confirm password with 6 char");
    } else if (password !== cpassword) {
      alert("password and confirm password not matched");
    } else {
      console.log("register");
    }
  };

  return (
    <>
      <div className="register">
        <div className="main">
          <h1>Welcome to Register</h1>
          <br />
          <div className="form">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter your name..."
              name="name"
              value={inpVal.name}
              onChange={setVal}
            />
          </div>
          <br />
          <div className="form">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={inpVal.email}
              onChange={setVal}
            />
          </div>
          <br />
          <div className="form">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={inpVal.password}
              onChange={setVal}
            />
          </div>
          <br />
          <div className="form">
            <label htmlFor="cpassword">Confirm Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter your confirm password"
              name="cpassword"
              value={inpVal.cpassword}
              onChange={setVal}
            />
          </div>
          <br />
          <div className="form">
            <button onClick={registerUser} className="btn btn-success">
              Register
            </button>
          </div>
          <br />
          <div className="form">
            <p>
              Already Account? <NavLink to={"/login"}> Login</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
