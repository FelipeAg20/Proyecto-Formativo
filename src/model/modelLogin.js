export async function  modelLogin  (obj) {
    const sql = "SELECT pass, nombres FROM Usuarios WHERE dni = ?";
    const dni = [obj.dni];
    const result= await conexion.execute(sql, dni);

    if (result[0].length > 0) {
      const pssHash = result[0][0].pass;
      const validarPass = await bcrypt.compare(obj.pass, pssHash);

      if (validarPass) {
        return { logged: true, nombre: result[0][0].nombres };
      }
      return { logged: false, status: "Dni o Contraseña invalido 1" };
    }
    return { logged: false, status: "Dni o Contraseña invalido 2" };
  }