import { conexion } from "../db/conexion";
export function modelRegister(obj){
        const sql =
          "INSERT INTO usuario (dni,nombres,pass) VALUES (?, ?, ?, ?)";
        const values = [
          obj.nombres,
          obj.dni, 
          obj.pass,
        ];
        return conexion.execute(sql, values);
    }