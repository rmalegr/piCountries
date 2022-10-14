import React from "react";
import { Link } from "react-router-dom";
import style from "../Landingpage/LandingPage.module.css";
export const LandingPage = () => {
  return (
    <div className={style.background}>
      <h1 className={style.textbox}>Estoy en Landing Page</h1>
      <Link to={"/countries"}>
        <button className={style.btn}> ir Home </button>
      </Link>
    </div>
  );
};
