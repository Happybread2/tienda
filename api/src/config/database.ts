import { Sequelize } from 'sequelize';

const db = new Sequelize('nombre_basedatos', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

export default db;
