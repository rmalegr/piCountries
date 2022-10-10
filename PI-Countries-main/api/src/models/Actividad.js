const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'actividad',
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dificultad: {
        type: DataTypes.INTEGER,
        validate: {
          dificultad() {
            if (this.dificultad > 5) {
              throw new Error('dificultad must be between 1 and 5');
            }
          },
        },
      },
      duracion: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      temporada: {
        type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
      },
    },
    {
      timestamps: false,
    }
  );
};
