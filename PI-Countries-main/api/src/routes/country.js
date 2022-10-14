const { Router } = require("express");
const { Country, Activity } = require("../db");
const axios = require("axios");
const { json } = require("body-parser");
const router = Router();

// localhost:3000/countries
router.get("/", async (req, res) => {
  const { name } = req.query;
  const allCountries = await Country.findAll({
    include: Activity,
  });

  if (name) {
    const byName = await allCountries.filter((i) =>
      i.name.toLowerCase().startsWith(name.toLowerCase())
    );
    byName.length
      ? res.json(byName)
      : res.status(404).send({ msg: "Not found" });
  } else {
    res.json(allCountries);
  }
});

//GET localhost:3000/countries:id

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  let countries;

  try {
    if (id.length > 1) {
      c = await Country.findByPk(id, { include: Activity });

      c = {
        id: c.id,
        name: c.name,
        image: c.image,
        continent: c.continent,
        capital: c.capital,
        subregion: c.subregion,
        area: c.area,
        population: c.population,
        activities: c.activities.map((e) => {
          return {
            id: e.id,
            name: e.name,
            difficulty: e.difficulty,
            duration: e.duration,
            season: e.season,
          };
        }),
      };
    }
    res.json(countries);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
