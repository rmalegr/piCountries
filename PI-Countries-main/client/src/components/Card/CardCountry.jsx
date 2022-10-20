/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDetail} from "../../redux/actions/index";
import s from "../Card/Card.module.css";
import imgMundo from "../../images/puntos.png";
import {Nav} from "../Nav/Nav";
const CardCountry = (props) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const loading = useSelector((state) => state.loading);
  const id = props.match.params.id;

  const formatNumber = (num) => {
    let str = num.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return str.join(".");
  };

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);

  const activities = details.activities?.map((e) => {
    return {
      name: e.name,
      difficulty: e.difficulty,
      duration: e.duration,
      season: e.season,
    };
  });

  console.log(details);
  return (
    <>
      <Nav />
      <div className={s.card}>
        {loading ? (
          <img src={imgMundo} />
        ) : details !== null ? (
          <div>
            <div className={s.flag}>
              <h2>{details.name}</h2>
              <img
                src={details.image}
                alt={details.name}
                className={s.imagen}
              />
            </div>
            <div className={s.cont}>
              <div className={s.detail}>
                <div className={s.details}>
                  <h3>Details</h3>
                  <p>Code: {details.id}</p>
                  <p>Continent: {details.continent}</p>
                  <p>Capital: {details.capital}</p>
                  <p>Population: {details.population}</p>
                  <p>Subregion: {details.subregion}</p>
                  <p>Area: {formatNumber(parseInt(details.area))} km²</p>
                </div>
                <div className={s.activities}>
                  <h3>Activities</h3>
                  {activities?.length > 0 ? (
                    activities?.map((e) => {
                      return (
                        <div key={e.id}>
                          <p>Name: {e.name}</p>
                          <p>Difficulty: {e.difficulty}</p>
                          <p>Duration: {e.duration}</p>
                          <p>Season: {e.season}</p>
                          <hr></hr>
                        </div>
                      );
                    })
                  ) : (
                    <p>Without activities</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Country not found</p>
        )}
      </div>
    </>
  );
};

export default CardCountry;
