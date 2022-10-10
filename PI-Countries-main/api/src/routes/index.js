const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers

const country = require('./country');
const actividad = require('./actividad');
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', country); //--> localhost:3001/countries
router.use('/actividades/', actividad);

module.exports = router;
