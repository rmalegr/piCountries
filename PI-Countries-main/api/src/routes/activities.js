const { Router } = require('express');
const { Activity, Country } = require('../db');
const router = Router();

//GET/ --> localhost:3000/activities
router.get('/', async (req, res) => {
  const allActivities = await Activity.findAll({ include: Country });
  //filtro para el front que trae todas las actividades
  const filterA = allActivities.map((e) => e.name.toLowerCase());
  const total = filterA.filter((item, index) => {
    return filterA.indexOf(item) === index;
  });
  res.json(total);
});

//POST
router.post('/', async (req, res, next) => {
  const { name, dificultad, duracion, temporada, countries } = req.body;
  try {
    let activity = await Activity.create({
      name,
      dificultad,
      duracion,
      temporada,
      countries,
    });

    await activity.setCountries(countries);

    let activityWithCountry = await Activity.findOne({
      where: { name: name },
      attributes: {
        exclude: ['updatedAt', 'createdAt'],
      },
      include: {
        model: Country,
        through: {
          attributes: [],
        },
      },
    });
    res.json(activityWithCountry);
  } catch (error) {
    next(error);
  }
});

module.exports = router;