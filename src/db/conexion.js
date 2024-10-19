import mysql2 from "mysql2/promise";

export const conexion = mysql2.createPool({
  host: process.env.DB_HOST||"localhost",
  user:process.env.DB_USER||"root",
  password:process.env.DB_PASSWORD ||"",
  database:process.env.DB_NOMBRE ||"lims1",
  port:process.env.DB_PORT || 3305
});

