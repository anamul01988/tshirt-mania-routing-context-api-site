import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header ">
      <main>
        <h2>practice session</h2>
       
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/review">ReviewItems</Link>
        <Link to="/">Context </Link>
      </nav>
    </div>
  );
};

export default Header;
