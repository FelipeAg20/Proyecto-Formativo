import { conexion } from "../db/conexion.js";
export function modelRegister(obj){
        const sql =
          "INSERT INTO usuarios (dni,nombre,rol,contraseña) VALUES (?, ?, ?,?)";
        const values = [
          obj.dni, 
          obj.nombre,
          obj.rol,
          obj.contraseña,
        ];
        return conexion.execute(sql, values);
    }