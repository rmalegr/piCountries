//import axios from 'axios';

// Aca deben declarar las variables donde tengan el action types.
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
// export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
// export const CREATE_MOVIE = 'CREATE_MOVIE';
// export const DELETE_MOVIE = 'DELETE_MOVIE';
// export const SEND_EMAIL = 'SENT_EMAIL';

export const getAllCountries = () => {
  return function (dispatch) {
    return fetch('http://localhost:3001/countries')
      .then((result) => result.json())
      .then((countrie) => {
        dispatch({ type: 'GET_ALL_COUNTRIES', payload: countrie });
      })
      .catch((error) => {
        return ' Ha ocurrido un error. Intenta recargando la Página ';
      });
  };
};

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
