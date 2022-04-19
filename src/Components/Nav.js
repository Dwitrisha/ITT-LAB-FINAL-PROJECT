import React, { useState, useEffect } from "react";
import "./css/Nav.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { signOut } from 'firebase/auth' 
import { auth } from '../firebase'


function Nav() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <div>
      <div id="nav-container">
        <Link to="/result">
          <button
            className={splitLocation[1] === "result" ? "active" : "nav-btn"}
          >
            Result
          </button>
        </Link>
        <Link to="/journal">
          <button
            className={splitLocation[1] === "journal" ? "active" : "nav-btn"}
          >
            Journal
          </button>
        </Link>
        <span onClick={() => signOut(auth)}>Sign Out</span>
      </div>
    </div>
  );
}

export default Nav;
