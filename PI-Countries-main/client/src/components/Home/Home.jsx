import React, { useState } from "react";
import {
	getActivity,
	byContinent,
	byPopulation,
	byOrder,
	getCountries,
	byActivity,
} from "../../redux/actions";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "../Home/Home.module.css";
import { Nav } from "../Nav/Nav";
import Paginacion from "./Paginacion/Paginacion";
import CardDetalles from "../Details/CardDetalles";
import PaginationComponent from "./PaginationComponent/PaginationComponent";
// import CardDetalles from "../Details/CardDetalles";

const Home = () => {
	const dispatch = useDispatch();
	const [order, setOrder] = useState("");
	const countries = useSelector((state) => state.countries);
	const activity = useSelector((state) => state.activity);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPages, setItemsPerPages] = useState(9);
	//Acciones
	//useEffect CARGAMOS EL ESTADO CON LAS ACTIONS getCountries() && getActivity() con el dispatch()

	useEffect(() => {
		dispatch(getCountries());
		dispatch(byActivity());
	}, [dispatch]);

	// Paginacion
	const indexOfLastItem = currentPage * itemsPerPages;
	const indexOfFirstItem = indexOfLastItem - itemsPerPages;
	const shownCountries = countries.slice(indexOfFirstItem, indexOfLastItem);
    
    //Filtros
	function handleOrder(e) {
		e.preventDefault();
		dispatch(byOrder(e.target.value));
		setOrder(e.target.value);
	}

	function handleContinents(e) {
		e.preventDefault();
		dispatch(byContinent(e.target.value));
		setOrder(e.target.value);
	}

	function handleOrderPopulation(e) {
		e.preventDefault();
		dispatch(byPopulation(e.target.value));
		setOrder(e.target.value);
	}

	function handleActivity(e) {
		e.preventDefault();
		dispatch(byActivity(e.target.value));
		setOrder(e.target.value);
	}

	useEffect(() => {
		dispatch(getActivity());
	}, [dispatch]);

	console.log(countries);
	return (
		<div className={style.background}>
			<Nav />

			<div className={style.filters}>
				<div className={style.filter}>
					<select onChange={handleOrderPopulation}>
						<option value="Max" key="Max">
							Max population{" "}
						</option>
						<option value="Min" key="Min">
							Min population
						</option>
					</select>
				</div>
				<div className={style.filter}>
					<select
						className={style.selectContinent}
						onChange={handleContinents}
					>
						<option value="All" key="All">
							All continents
						</option>
						<option value="Africa" key="Africa">
							Africa
						</option>
						<option value="Antarctica" key="Antarctica">
							Antarctica
						</option>
						<option value="Asia" key="Asia">
							Asia
						</option>
						<option value="Europe" key="Europe">
							Europe
						</option>
						<option value="North America" key="NorthAmerica">
							North America
						</option>
						<option value="Oceania" key="Oceania">
							Oceania
						</option>
						<option value="South America" key="SouthAmerica">
							South America
						</option>
					</select>
				</div>
				<div className={style.filter}>
					<select onChange={handleActivity}>
						{" "}
						<option value="All">All activities</option>
						{activity.map((e) => (
							<option value={e} key={e.id}>
								{e}
							</option>
						))}
					</select>
				</div>
				<div className={style.filter}>
					<select onChange={handleOrder}>
						<option value="Asc" key="Asc">
							A-Z
						</option>
						<option value="Desc" key="Desc">
							Z-A
						</option>
					</select>
				</div>
			</div>
			<div className={style.containerCountry}>
				{shownCountries.length > 0
					? shownCountries.map((e) => {
							return (
								<div className={style.card}>
									<Link to={"/countries/" + e.id} key={e.id}>
										<CardDetalles
											key={e.id}
											name={e.name}
											image={e.image}
											continent={e.continent}
										/>
									</Link>
								</div>
							);
					  })
					: null}
			</div>

			{!shownCountries.length > 0 ? null : (
				<div>
					{/* <Paginacion
						showPerPage={countryPerPage}
						countries={countries.length}
						pagination={pagination}
						page={page}
					/> */}
					<PaginationComponent
						allCountries={countries}
						itemsPerPages={itemsPerPages}
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</div>
			)}

			<div></div>
		</div>
	);
};

export default Home;
