import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearState, getByName} from "../../redux/actions";
import {Link, NavLink} from "react-router-dom";
import Logo from "../../images/henry.jpg";
import {ImExit} from "react-icons/im";
import "./Navbar.css";

export const Nav = () => {
  const dispatch = useDispatch();
  const desmontar = () => {
    dispatch(clearState);
  };
  function handleChange(e) {
    dispatch(getByName(e.target.value));
  }
  return (
    <header className="navbar">
      <div>
        <NavLink exact to={"/countries"}>
          <img
            id="logoHenry"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </NavLink>
      </div>
      <div className="title">
        <Link to={"/countries"}>
          <h3 className="title" onClick={() => desmontar()}>
            {" "}
            Henry Country's
          </h3>
        </Link>
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
              <NavLink exact to={"/countries"}>
                Home
              </NavLink>
            </li>
            <li className="list-item">
              {" "}
              <NavLink to={"/activity"}>AddActivity</NavLink>{" "}
            </li>
            <li className="list-item">
              <NavLink to={"/"}>
                <ImExit size={"1.5rem"} />
              </NavLink>{" "}
            </li>
          </ul>
        </nav>
      </div>{" "}
    </header>
  );
};
