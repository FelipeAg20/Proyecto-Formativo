import { conexion } from "../db/conexion.js";

export async function  modelLogin  (obj) {
    const sql = "SELECT contraseña, nombres FROM Usuarios WHERE dni = ?";
    const dni = [obj.dni];
    const result = await conexion.execute(sql, dni);
    console.log(result);
    
    if (result[0].length > 0) {
      /*
      //TEMPORALMENTE MIENTRAS NO ESTA EL REGISTRO, PARA EVITAR PROBLEMAS CON BCRYPT
      const pssHash = result[0][0].pass;
      const validarPass = await bcrypt.compare(obj.pass, pssHash);
      s
      if (validarPass) {
        return { success: true, message: "Login exitoso", result: result[0] }
      }
      */
      if(obj.contraseña == result[0].contraseña){
        return { success: true, message: "Login exitoso", result: result[0] }
      }
      return { success: false, message: "Dni o Contraseña invalido"}
    }
    return { success: false, message: "Dni o Contraseña invalido"}
  }