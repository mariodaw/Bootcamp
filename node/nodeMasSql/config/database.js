const mysql = require("mysql2");

//explicar en el readme
const db = mysql.createConnection({
  host: "localhost",
  port:3007,
  user: "mario",
  password: "marioestatriste123",
//   database: "database", use expressDB
}); //creamos la configuración para conectarnos a la bd

db.connect(); // nos conectamos

module.exports = db;