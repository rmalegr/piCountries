import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../redux/actions';
import { CountrieCard } from '../CountrieCard/CountrieCard';

const Home = () => {
  console.log('Estoy en Home');
  const dispatch = useDispatch();
  const paises = useSelector((state) => state.countries);

  //LOS CICLOS DE VIDA DEL COMPONENTE (didmount, didUpdate, willUmount)
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  console.log(paises);
  return (
    <div>
      <h1>Paises</h1>
      {paises.length > 0
        ? paises.map((p) => (
            <CountrieCard
              id={p.id}
              nombre={p.nombre}
              image={p.image}
              continente={p.continente}
              subregion={p.subregion}
              area={p.area}
              poblacion={p.poblacion}
            />
          ))
        : null}
    </div>
  );
};

export default Home;
