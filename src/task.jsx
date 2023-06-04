import React from "react";
import { Link } from "react-router-dom";
import './task.css'

const NavBar = () => {
  return (
    <nav className="navbar1">
      <div className="navbar__container1">
        <div className="navbar__brand1">
          <Link to="/" className="navbar__link1">
            My Website
          </Link>
        </div>
          <div className="navbar__item1">
            <Link to="/component4/TodoList" className="navbar__link1">
              Task 1
            </Link>
          </div>
        </div>
       </nav>
  );
};

export default NavBar;
