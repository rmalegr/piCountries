import React from 'react';
import { Link } from 'react-router-dom';
import s from './LandingPage.module.css';
//TODOS MIS ESTILOS VAN  ASER S.elnombreDeLaClase
export const LandingPage = () => {
  return (
    <div>
      <Link to="/home">
        <h1 className={s.button}>Home</h1>
      </Link>
    </div>
  );
};
