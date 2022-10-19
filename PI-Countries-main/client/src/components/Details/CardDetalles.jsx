import React from "react";

const CardDetalles = ({ name, image, continent }) => {
	return (
		<div>
			<h3>{name}</h3>
			<img src={image} alt={`${name} bandera`} />
			<p>{continent}</p>
		</div>
	);
};

export default CardDetalles;
