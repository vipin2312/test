import React from "react";
import { IoKeySharp } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>IKONWORK</h1>
      </div>
      <div className="header-right">
        <button className="header-action">
          <IoKeySharp className="header-icon" /> Sign Up
        </button>
        <button className="header-action">
          <IoIosLogIn className="header-icon" />
          Login
        </button>
        <button className="header-btn post-job-btn">+ Post Jobs</button>
      </div>
    </header>
  );
};

export default Header;
