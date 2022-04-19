import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/Register.css";
import register from "../img/register.png";
import firebase from "firebase"
import { db } from "../firebase";
import { useHistory } from "react-router-dom";

function registerUser() {

  db.collection("users").add({
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    datetime: firebase.firestore.FieldValue.serverTimestamp(),
  })

  window.location.href = "/journal";

}

function Register() {

  //let history = useHistory();

  return (
    <div>
      Register
      <Link to="/">
        <button>Login</button>
      </Link>
      <center>
        <div id="login-form">
          <h3>Register</h3>

          <img src={register} width="50%" />
          <input
            type="textarea"
            className="text"
            id="fname"
            placeholder="First Name"
         
          />
          <br/>
           <input
            type="textarea"
            className="text"
            id="lname"
            placeholder="Last Name"
          />
          <br/>
          <input
            type="textarea"
            className="text"
            id="email"
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            className="text"
            id="password"
            placeholder="Password"
          />
          <br />
          <button
            class=" submits"
            onClick={() => {
              registerUser();
            }}
          >
            SIGN UP
          </button>
        </div>
      </center>
    </div>
  );
}

export default Register;
