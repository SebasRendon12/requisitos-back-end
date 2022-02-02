import { Sequelize } from 'sequelize';

//const db = new Sequelize('requisitos', 'root', 'sebas123', { // G1
   const db = new Sequelize('requisitos', 'root', '', { // G2
  // const db = new Sequelize('requisitos', 'root', '', { // G3
  // const db = new Sequelize('requisitos', 'root', '', { // G6
  // const db = new Sequelize('requisitos', 'root', '', { // G7
  // const db = new Sequelize('requisitos', 'root', '', { // G8
  host: '127.0.0.1',
  dialect: 'mysql'
});

export default db;

var mysql = require('mysql');

 export const DB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "requisitos"
});
