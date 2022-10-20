import React, {useState} from "react";
import {
  getActivity,
  byContinent,
  byPopulation,
  byOrder,
  getCountries,
  byActivity,
  clearState,
} from "../../redux/actions";

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import style from "../Home/Home.module.css";
import {Nav} from "../Nav/Nav";
import Paginacion from "./Paginacion/Paginacion";
import CardDetalles from "../Details/CardDetalles";

// import CardDetalles from "../Details/CardDetalles";

const Home = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");
  const countries = useSelector((state) => state.countries);
  const activity = useSelector((state) => state.activity);

  const [page, setPage] = useState(1);
  const [showPerPage, setShowPerPage] = useState(9);
  const lastOnPage = page * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;
  const shownCountries = countries.slice(firstOnPage, lastOnPage);

  function pagination(pageNumber) {
    window.scrollTo(0, 0);

    if (pageNumber === 1) {
      setPage(1);
      setShowPerPage(9);
    } else {
      setShowPerPage(10);
      setPage(pageNumber);
    }
    //en caso de que no haya contneido en esas paginas
    if (pageNumber === 26 || pageNumber === 27 || pageNumber === 28) {
      setPage(1);
      setShowPerPage(9);
    }
  }

  useEffect(() => {
    dispatch(getCountries());
    dispatch(byActivity());
  }, [dispatch]);

  // Paginacion
  // const indexOfLastItem = currentPage * itemsPerPages;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPages;
  // const shownCountries = countries.slice(indexOfFirstItem, indexOfLastItem);

  //Filtros
  function handleOrder(e) {
    e.preventDefault();
    dispatch(byOrder(e.target.value));
    setOrder(e.target.value);
  }

  function handleContinents(e) {
    e.preventDefault();
    dispatch(byContinent(e.target.value));
    setOrder(e.target.value);
  }

  function handleOrderPopulation(e) {
    e.preventDefault();
    dispatch(byPopulation(e.target.value));
    setOrder(e.target.value);
  }

  function handleActivity(e) {
    e.preventDefault();
    setPage(1);
    dispatch(byActivity(e.target.value));
    setOrder(e.target.value);
  }

  useEffect(() => {
    dispatch(clearState());
    dispatch(getActivity());
  }, [dispatch]);

  console.log(countries);
  return (
    <div className={style.background}>
      <Nav />

      <div className={style.filters}>
        <div className={style.filter}>
          <select onChange={handleOrderPopulation}>
            <option value="Max" key="Max">
              Max population{" "}
            </option>
            <option value="Min" key="Min">
              Min population
            </option>
          </select>
        </div>
        <div className={style.filter}>
          <select className={style.selectContinent} onChange={handleContinents}>
            <option value="All" key="All">
              All continents
            </option>
            <option value="Africa" key="Africa">
              Africa
            </option>
            <option value="Antarctica" key="Antarctica">
              Antarctica
            </option>
            <option value="Asia" key="Asia">
              Asia
            </option>
            <option value="Europe" key="Europe">
              Europe
            </option>
            <option value="North America" key="NorthAmerica">
              North America
            </option>
            <option value="Oceania" key="Oceania">
              Oceania
            </option>
            <option value="South America" key="SouthAmerica">
              South America
            </option>
          </select>
        </div>
        <div className={style.filter}>
          <select onChange={handleActivity}>
            {" "}
            <option value="All">All activities</option>
            {activity.map((e) => (
              <option value={e} key={e.id}>
                {e}
              </option>
            ))}
          </select>
        </div>
        <div className={style.filter}>
          <select onChange={handleOrder}>
            <option value="Asc" key="Asc">
              A-Z
            </option>
            <option value="Desc" key="Desc">
              Z-A
            </option>
          </select>
        </div>
      </div>
      <div className={style.containerCountry}>
        {shownCountries.length > 0
          ? shownCountries.map((e) => {
              return (
                <div className={style.card}>
                  <Link to={"/countries/" + e.id} key={e.id}>
                    <CardDetalles
                      key={e.id}
                      name={e.name}
                      image={e.image}
                      continent={e.continent}
                    />
                  </Link>
                </div>
              );
            })
          : null}
      </div>

      {!shownCountries.length > 0 ? null : (
        <div>
          <Paginacion
            showPerPage={showPerPage}
            countries={countries.length}
            pagination={pagination}
            page={page}
          />
          {/* <PaginationComponent
            allCountries={countries}
            itemsPerPages={itemsPerPages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          /> */}
        </div>
      )}
    </div>
  );
};

export default Home;
