import { conexion } from "../db/conexion.js";
export function modelRegister(obj){
        const sql =
          "INSERT INTO usuarios (dni,nombre,roll,contraseña) VALUES (?, ?, ?,?)";
        const values = [
          obj.dni, 
          obj.nombre,
          obj.roll,
          obj.contraseña,
        ];
        return conexion.execute(sql, values);
    }