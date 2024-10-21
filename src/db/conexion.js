import mysql2 from "mysql2/promise";
import dotenv from 'dotenv';
dotenv.config()
export const conexion = mysql2.createPool({
  host: process.env.DB_HOST||"localhost",
  user:process.env.DB_USER||"root",
  password:process.env.DB_PASSWORD ||"1234",
  database:process.env.DB_NOMBRE ||"lims1",
  port:process.env.DB_PORT || 3305
});

