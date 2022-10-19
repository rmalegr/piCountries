import React from "react";
import { Link } from "react-router-dom";
import style from "../Landingpage/LandingPage.module.css";
export const LandingPage = () => {
	return (
		<>
			<div className={style.container}></div>
			<div className={style.boxtexto}>
				<h1 className={style.titulo}>Bienvenido a Henry Country's</h1>
				<Link to={"/countries"}>
					<button className={style.button}> Home </button>
				</Link>
			</div>
		</>
	);
};
