import React from "react";
import "./css/Login.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import login from "../img/login.png";

function Login() {
  return (
    <div>
      Login
      <Link to="/register">
        <button>Register</button>
      </Link>
      <center>
      <div id="login-form">
      <h3>Login</h3>
      <img src={login} width="70%"/>
      <input type="textarea" className="text" placeholder="Email"/>
      <br/>
      <input type="password" className="text" placeholder="Password"/>
      <button
            class=" submits"
          
          >
            LOGIN
          </button>
      </div>
      </center>
    </div>
  );
}

export default Login;
