import axios from "axios";

import {
  GET_ACTIVITY,
  BY_ACTIVITY,
  BY_CONTINENT,
  BY_NAME,
  BY_ODER,
  BY_POPULATION,
  GET_COUNTRIES,
  GET_DETAIL,
  FAILURE,
  LOADING,
} from "./constantes";

const url = "http://localhost:3001";

// export function getCountries() {
//   return function (dispatch) {
//     return fetch(`${url}/countries`)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: GET_COUNTRIES, payload: json });
//       });
//   };
// }
//Solucion GetCountries con AXIOS
export const getCountries = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${url}/countries`);
      return dispatch({
        type: GET_COUNTRIES,
        payload: res.data,
      });
    } catch (error) {
      return dispatch({
        type: FAILURE,
        payload: error.response.data.msg,
      });
    }
  };
};

export function getDetail(id) {
  return async function (dispatch) {
    try {
      dispatch({
        type: LOADING,
      });
      const res = await axios.get(`${url}/countries/${id}`);
      return dispatch({
        type: GET_DETAIL,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postActivity(payload) {
  return async function () {
    try {
      const res = await axios.post(`${url}/activity/`, payload);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
}

export function byOrder(payload) {
  return {
    type: BY_ODER,
    payload,
  };
}

export function byPopulation(payload) {
  return {
    type: BY_POPULATION,
    payload,
  };
}

export function byContinent(payload) {
  return {
    type: BY_CONTINENT,
    payload,
  };
}

export function byActivity(payload) {
  return {
    type: BY_ACTIVITY,
    payload,
  };
}

export function getByName(name) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${url}/countries?name=${name}`);
      return dispatch({
        type: BY_NAME,
        payload: res.data,
      });
    } catch (error) {
      return dispatch({
        type: FAILURE,
        payload: error.response.data.msg,
      });
    }
  };
}

export function getActivity() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${url}/activity`);
      return dispatch({
        type: GET_ACTIVITY,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// export const getMovieDetail = (id) => {
//   return function (dispatch) {
//     return fetch(`http://localhost:3001/movies/${id}`)
//       .then((result) => result.json())
//       .then((respJson) => {
//         dispatch({ type: 'GET_MOVIE_DETAILS', payload: respJson });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };
// let id = 6;
// export const createMovie = (movie) => {
//   return {
//     type: 'CREATE_MOVIE',
//     payload: { ...movie, id: id++ },
//   };
// };

// // Desde el componente ejecutamos la action creator, pasandole como argumento el id de la movie que queremos eliminar.
// export const deleteMovie = (id) => {
//   return {
//     type: 'DELETE_MOVIE',
//     payload: id,
//   };
// };

// // Desde el componente ejecutamos la action creator, pasandole como argumento los values que vamos a utilizar para enviar el form de contacto.
// export const sendEmail = (payload) => {
//   return {
//     type: 'SENT_EMAIL',
//     payload,
//   };
// };
