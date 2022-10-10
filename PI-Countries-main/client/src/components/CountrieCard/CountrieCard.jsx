import React from 'react';

export const CountrieCard = ({
  nombre,
  continente,
  subregion,
  image,
  area,
  poblacion,
}) => {
  return (
    <div>
      <h3>{nombre['common']}</h3>
      <p>{continente}</p>
      <img src={image[1]} alt="img" />
    </div>
  );
};
