import React from "react";
import { auth } from "./firebase.js";
import "./main.css";

const Mainpage = ({ user }) => {
  return (
    <div className="home">
      <h1 className="displayText">
        Hello , <span></span>
        {user.displayName}
      </h1>
      <span className="display">
        <img className="displayImage" src={user.photoURL} alt="" />
        <button className="buttonSignout" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      </span>
    </div>
  );
};

export default Mainpage;
