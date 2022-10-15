import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/henry.jpg";
import "./Navbar.css";
export const Nav = () => {
  return (
    <header className="navbar">
      <div>
        <img
          id="logoHenry"
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
      </div>
      <div className="title">
        <h3 className="title"> Henry Country</h3>
      </div>
      <div>
        <nav>
          <ul className="list">
            <li className="list-item">
              <NavLink exact to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="list-item">
              {" "}
              <NavLink to={"/activity"}>AddActivity</NavLink>{" "}
            </li>
          </ul>
        </nav>
      </div>{" "}
    </header>
  );
};
