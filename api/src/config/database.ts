import { Sequelize } from 'sequelize';
require('dotenv').config();

const DBNAME = process.env.DBNAME;
const DBUSER = process.env.DBUSER;
const DBPASS = process.env.DBPASS;

if (!DBNAME || !DBUSER || !DBPASS) {
  throw new Error('error');
}

const db = new Sequelize(DBNAME, DBUSER, DBPASS, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

export default db;
