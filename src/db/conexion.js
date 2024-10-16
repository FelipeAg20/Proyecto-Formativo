import mysql2 from "mysql2/promise";

export const conexion = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  port: 3306,
  database: "lims1",
});

