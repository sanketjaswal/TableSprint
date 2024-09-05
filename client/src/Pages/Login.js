import React, { useState } from "react";
import "css/Login.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "utils/axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/login", {
        email,
        password,
      });

      if (!response) {
        throw new Error("Login failed");
      }

      const data = await response;
      console.log(data.data.token);
      localStorage.setItem("token", data.data.token);

      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const goToLogin = () => {
    document.getElementById("login").style.transform = "scale(1)";
    document.getElementById("forgotPass").style.transform = "scale(0)";
  };

  const goToForgotPassword = () => {
    document.getElementById("forgotPass").style.transform = "scale(1)";
    document.getElementById("login").style.transform = "scale(0)";
  };

  return (
    <>
      <div className="Contanier">
        <div className="login-holder" id="login">
          <img src="/assets/Home_img.png" height="10" alt="Home-img"></img>
          <h1>Welcome to TableSprint admin</h1>
          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Email-id
            </label>
            <input
              className="form-input"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a onClick={goToForgotPassword}>
            <p>Forgot Password?</p>
          </a>
          <button className="save-button" type="submit" onClick={handleLogin}>
            Log In
          </button>
        </div>
        <div className="forgot-password" id="forgotPass">
          <h1>Did you forget password?</h1>
          <p>
            Enter your email address and we’ll send you a link to restore
            password
          </p>
          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input className="form-input" id="email" type="email" />
          </div>
          <button className="save-button" type="submit">
            Request Rest Link
          </button>
          <a onClick={goToLogin}>Back to log in</a>
        </div>
      </div>
    </>
  );
};
