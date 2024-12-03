import { conexion } from "../db/conexion.js";
import bcrypt from 'bcrypt';

export async function  modelLogin  (obj) {
    const sql = "SELECT contraseña, rol, id FROM usuarios WHERE dni = ?";
    const dni = [obj.dni];

    const result = await conexion.execute(sql, dni);
    console.log(result);
    
    if (result[0].length > 0) {
    
      //TEMPORALMENTE MIENTRAS NO ESTA EL REGISTRO, PARA EVITAR PROBLEMAS CON BCRYPT
      const pssHash = result[0][0].contraseña;
      const validarPass = await bcrypt.compare(obj.contraseña, pssHash);
      
      if (validarPass) {
        return { success: true, message: "Login exitoso", id: result[0].id, rol: result[0][0].rol }
      }
      return { success: false, message: "Dni o Contraseña invalido"}
    }
    return { success: false, message: "Dni o Contraseña invalido"}
  }