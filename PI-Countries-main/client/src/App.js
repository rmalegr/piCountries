import React from "react";
import {Switch, Route} from "react-router-dom";
import "./App.css";
import {LandingPage} from "./components/Landingpage/LandingPage";
import Home from "./components/Home/Home";
import CardCountry from "./components/Card/CardCountry";
import AddActivity from "./components/Actividad/AddActivity";
//import AgregarActividad from "./components/Activity/AgregarActividad";

// "/" --> localhost:3000/
function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Switch>
					<Route exact path="/countries" component={Home} />
					<Route exact path="/countries/:id" component={CardCountry} />
					<Route exact path="/activity" component={AddActivity} />
				</Switch>
			</Switch>
		</div>
	);
}

export default App;
