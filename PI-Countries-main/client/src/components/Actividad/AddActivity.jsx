import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {getActivity, getCountries, postActivity} from "../../redux/actions";
import style from "./AddActivity.module.css";
import {Nav} from "../Nav/Nav";
import validate from "./validators";
// import Swal from "sweetalert2";

function valida(input) {
	let errors = {};
	if (!input.name) {
		errors.name = "Name required";
	}
	return errors;
}

function AddActivity() {
	const dispatch = useDispatch();
	const history = useHistory();
	const countries = useSelector((state) => state.countries).sort((a, b) => {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	});

	//Formulario controlado
	const [selected, setSelected] = useState("");
	const [errors, setErrors] = useState({PimerIntento: true});
	const [input, setInput] = useState({
		name: "",
		difficulty: "",
		duration: "",
		season: "",
		countries: []
	});

	useEffect(() => {
		dispatch(getCountries());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getActivity());
	}, [dispatch]);

	function handleChange(e) {
		setInput({
			...input,
			[e.target.name]: e.target.value
		});
		if (!errors.PimerIntento) {
			setErrors(
				validate({
					...input,
					[e.target.name]: e.target.value
				})
			);
		}
	}

	function handleSelect(id) {
		setInput({
			...input,
			countries: [...input.countries, id.target.value]
		});
	}

	function handleSeason(e) {
		// setInput({
		//   ...input,
		//   season: e.target.value,
		// });
		if (
			e.target.value !== "Seleccionar" &&
			!input.season.includes(e.target.value)
		) {
			setInput({
				...input,
				season: e.target.value
			});
			if (!errors.PimerIntento) {
				setErrors(
					validate({
						...input,
						season: e.target.value
					})
				);
			}
		}
	}

	function handleSelctDifficulty(e) {
		setInput({
			...input,
			difficulty: e.target.value
		});
	}

	function handleSelectDuration(e) {
		setInput({
			...input,
			duration: e.target.value
		});
	}

	function handleDelete(e) {
		setInput({
			...input,
			countries: input.countries.filter((c) => c !== e)
		});
		// if (!errors.PimerIntento) {
		//   setErrors(
		//     validate({
		//       ...input,
		//       countries: input.countries.filter(
		//         (country) => country !== e.target.value,
		//       ),
		//     }),
		//   );
		// }
	}
	function handleCheckErrors(e) {
		e.preventDefault();
		setErrors(
			validate({
				...input,
				[e.target.name]: e.target.value,
				countries: [...input.countries, e.target.value]
			})
		);
		handleSubmit(e);
	}
	function handleSubmit(e) {
		e.preventDefault();
		if (
			input.name &&
			input.difficulty &&
			input.duration &&
			input.season &&
			input.countries.length >= 1
		) {
			dispatch(postActivity(input));
			alert("Actividad creada exitosamente");
			setInput({
				name: "",
				difficulty: "",
				duration: "",
				season: "",
				countries: []
			});
			errors.PimerIntento = false;
			history.push("/countries");
		}

		/*  alert('enviado') */

		// Swal.fire(
		//   {
		//     title: "La Actividad fue creada exitosamente ",
		//     confirmButtonColor: "#34a57f",
		//   } /* ).then(function(){
		//             window.location.replace('');
		//         } */
		// );
		if (errors.PimerIntento) {
			alert("Debe Completar los campos correspodientes");
		}
	}

	const season = ["Summer", "Autumn", "Winter", "Spring"];
	const difficulty = ["1", "2", "3", "4", "5"];
	const duration = [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
		"21",
		"22",
		"23",
		"24"
	];

	return (
		<>
			<Nav />
			<div className={style.form}>
				<div className={style.contenedor}>
					<div>
						<h2>Agregar Actividad</h2>
						<div>
							<div className={style.box}></div>
							<form onSubmit={handleSubmit}>
								<div className={style.act}>
									{" "}
									<label>Actividad: </label>
									<input
										type="text"
										value={input.name}
										name="name"
										onChange={handleChange}
										placeholder="Ingrese la Actividad..."
										required
										autoComplete="off"
									/>
								</div>
								{errors.name && <p className={style.error}>{errors.name}</p>}
								<div className={style.season}>
									<label>Temporada: </label>
									<select onChange={handleSeason} required>
										<option>Seleccionar</option>
										{season.map((e) => (
											<option value={e} name="season" key={e}>
												{e}
											</option>
										))}
									</select>
								</div>
								{errors.season && <p>{errors.season}</p>}
								<div className={style.diffi}>
									<label>Difficultad: </label>
									<select onChange={handleSelctDifficulty} required>
										<option value="" hidden>
											{" "}
											Elegir una Opcion
										</option>
										{difficulty.map((e) => (
											<option value={e} name="difficulty" key={e.id}>
												{e}{" "}
											</option>
										))}
									</select>
								</div>
								{errors.difficulty && <p>{errors.difficulty}</p>}
								<div className={style.duration}>
									<label>Duracion: </label>
									<select onChange={handleSelectDuration} required>
										<option value="" hidden>
											{" "}
											Elegir una option
										</option>
										{duration.map((e) => (
											<option value={e} name="duration">
												{e}
											</option>
										))}
									</select>
								</div>
								{errors.duration && <p>{errors.duration}</p>}
								<div className={style.country}>
									<label>País: </label>
									<select onChange={handleSelect} required>
										<option value="" hidden>
											Seleccionar País
										</option>
										{countries.map((e) => (
											<option value={e.id} name="countries" key={e.id}>
												{e.name}
											</option>
										))}
									</select>
								</div>
								{errors.season && <p>{errors.season}</p>}
								<div>
									<ul>
										<li className={style.countriesSelected}>
											{input.countries.map((i) => (
												<div>
													{i}
													<button onClick={() => handleDelete(i)} type="button">
														X
													</button>
												</div>
											))}
										</li>
									</ul>
								</div>
								<div>
									{errors.name ||
									errors.input ||
									errors.duration ||
									errors.season ||
									errors.countries ? (
										<button disabled>Agregar Actividad</button>
									) : (
										<button type="submit" onClick={(e) => handleCheckErrors(e)}>
											Agregar Actividad
										</button>
									)}
								</div>

								{/* <button type="submit">Agregar Actividad</button>  */}
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddActivity;
