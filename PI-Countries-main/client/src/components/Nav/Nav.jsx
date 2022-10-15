import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByName } from "../../redux/actions";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/henry.jpg";
import "./Navbar.css";
export const Nav = () => {
  const dispatch = useDispatch();
  function handleChange(e) {
    dispatch(getByName(e.target.value));
  }
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
            <li className={"list-item"}>
              {" "}
              Buscar :
              <div className={"search"}>
                <input
                  className="inputText"
                  type="text"
                  placeholder="Search Country..."
                  onChange={handleChange}
                />
              </div>
            </li>
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
