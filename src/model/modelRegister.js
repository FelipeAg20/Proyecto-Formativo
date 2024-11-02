import { conexion } from "../db/conexion.js";
export function modelRegister(obj){
        const sql =
          "INSERT INTO usuario (dni,nombres,contraseña) VALUES (?, ?, ?)";
        const values = [
          obj.nombres,
          obj.dni, 
          obj.contraseña,
        ];
        return conexion.execute(sql, values);
    }