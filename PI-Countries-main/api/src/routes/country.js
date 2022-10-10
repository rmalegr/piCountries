const { Router } = require('express');
const { Country, Actividad } = require('../db');
const axios = require('axios');
const router = Router();
//VAMOS A TRAERNOS TODOS LOS PRODUCTOS DE LA DB Y DE LA API

router.get('/', async (req, res) => {
  try {
    //TRAEMOS LOS  PAISES DE LA DB
    //findAll devuelve un arreglodeobjetos
    let dbCountries = await Country.findAll({ include: Actividad });
    dbCountries = dbCountries?.map((p) => {
      return {
        id: p.id,
        nombre: p.name,
        codigoPais: p.idd,
        continente: p.continents,
        subregion: p.subregion,
        area: p.area,
        poblacion: p.population,
        image: p.flags,
      };
    });
    console.log(dbCountries);

    let apiPromise = await axios.get('https://restcountries.com/v3/all');

    apiPromise = apiPromise.data.map((p) => {
      return {
        id: p.id,
        codigoPais: p.idd,
        nombre: p.name,
        continente: p.continents,
        subregion: p.subregion,
        area: p.area,
        poblacion: p.population,
        image: p.flags,
      };
    });

    let response = apiPromise.concat(dbCountries); //UNIMOS LOS DE DOS ARREGLOS -> RESPUESTAS DB -> RESPUESTA DE LA API

    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//PEDIDO A LA API

module.exports = router;
