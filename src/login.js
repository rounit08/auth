import React from "react";
import { signInWithGoogle } from "./firebase.js";
import "./login.css";

const Login = () => {
  return (
    <div>
      <center>
        <button className="button" onClick={signInWithGoogle}>
          <i className="fab fa-google"></i>Sign in with Google
        </button>
      </center>

      <p className="home">Made by Rounit R Sinha</p>
    </div>
  );
};

export default Login;
