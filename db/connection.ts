import { Sequelize } from "sequelize";

const db = new Sequelize("requisitos", "admin", "OjbVrKXQA7pMJahpCs25", {
  // G1
  // const db = new Sequelize('requisitos', 'root', '', { // G2
  // const db = new Sequelize('requisitos', 'root', '', { // G3
  // const db = new Sequelize('requisitos', 'root', '', { // G6
  // const db = new Sequelize('requisitos', 'root', '', { // G7
  // const db = new Sequelize('requisitos', 'root', '', { // G8
  host: "database-requisitos.c2ekmahcpt1r.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
});

export default db;
