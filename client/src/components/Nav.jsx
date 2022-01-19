import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import AddBook from "./AddBooks";
import "../styling/NavBar.css";
import logo from '../images/greatreadsLogo.png'

const Nav = () => {
  return (
    <header className="nav">
      <nav>
        <div>
          <Link to="/feed" className="upperNav">
            <img src ={logo} className="app-logo" />
          </Link>
          <Link to="/about" className="upperNav about-link">
            About
          </Link>
        </div>

        <AddBook />
      </nav>
    </header>
  );
};

export default Nav;
