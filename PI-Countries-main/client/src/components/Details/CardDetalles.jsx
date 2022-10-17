import React from "react";

const CardDetalles = ({name, image, continent}) => {
  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={`${name} bandera`} />
      <p>{continent }</p>
    </div>
  );
};

export default CardDetalles;
