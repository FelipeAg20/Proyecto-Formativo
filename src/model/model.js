import { conexion } from "../db/conexion.js";
export class modelos {
  static async getAllPP() {//TERMINADA
    try {
      const [rows] = await conexion.execute("SELECT * FROM `producto_proceso`");

      if (rows.length > 0) {
        return rows;
      } else {
        return {
          message: "No se encontraron productos en proceso 1",
        };
      }
    } catch (error) {
      console.error("Error al traer los productos en proceso 2", error.message);
      return {
        message: "Error al traer los productos en proceso 3",
        error: error.message,
      };
    }
  }
  static async getAllPT() {//TERMINADA
    try {
      const rows = await conexion.execute("SELECT * FROM `producto_terminado`");

      if (rows.length > 0) {
        return { success: true, data: rows };
      } else {
        return {
          message: "No se encontraron productos terminados",
        };
      }
    } catch (error) {
      console.error("Error al traer los productos terminados", error);
      return {
        message: "Error al traer los productos terminados",
      };
    }
  }
  static async getAllR() {//TERMINADA
    try {
      const rows = await conexion.execute("SELECT * FROM `resultado`");

      if (rows.length > 0) {
        return { success: true, data: rows };
      } else {
        return { success: false, message: "No se encontraron resultados" };
      }
    } catch (error) {
      console.error("Error al traer los resultados", error);
      return { success: false, message: "Error al traer los resultados" };
    }
  }
  static async getDatePP() {
    try {
      const rows = await conexion.execute("SELECT * FROM `resultado`");

      if (rows.length > 0) {
        return { success: true, data: rows };
      } else {
        return { success: false, message: "No se encontraron resultados" };
      }
    } catch (error) {
      console.error("Error al traer los resultados", error);
      return { success: false, message: "Error al traer los resultados" };
    }
  }
  static async createNewPP(body) {//TERMINADA
    try {
      const values =[body.fecha_analisis, body.fecha_toma_muestra, body.nombre_producto, body.saborizacion, body.tanque, body.tanque_alt, body.hora_toma_muestra, body.lote, body.responsable_analisis, body.observaciones, body.id_producto_proceso  ]

      const [rows ]= await conexion.execute(
        " INSERT INTO producto_proceso (    fecha_analisis, fecha_toma_muestra, nombre_producto, saborizacion, tanque, tanque_alt, hora_toma_muestra, lote, responsable_analisis, observaciones, id_producto_proceso  ) VALUES    (?,?,?,?,?,?,?,?,?,?,?)",
       values
      );
      console.log(rows);
      
      if (rows.affectedRows > 0) {
        return rows;
      } else {
        return {
          message: "No se pudo crear el producto en proceso 1",
        };
      }
    } catch (error) {
      console.error("Error al crear el productos en proceso2", error);
      return {
        message: "Error al crear el productos en proceso3",
      };
    }
  }
  static async createNewPT(body) {//TERMINADA
    try {
      const values =[body.fecha_analisis, body.fecha_empaque, body.hora_empaque, body.referencia, body.presentacion, body.maquina_envasadora, body.lote, body.responsable_analisis, body.observaciones, body.id_producto_terminado  ]
      const [rows] = await conexion.execute(
        "INSERT INTO producto_terminado (  fecha_analisis, fecha_empaque, hora_empaque, referencia, presentacion, maquina_envasadora, lote, responsable_analisis, observaciones, id_producto_terminado  ) VALUES  (?,?,?,?,?,?,?,?,?,?)",
      values);
      if (rows.affectedRows > 0) {
        return rows;
      } else {
        return {
          message: "No se pudo crear el producto terminado",
        };
      }
    } catch (error) {
      console.error("Error al crear el productos en proceso2", error);
      return {
        message: "Error al crear el productos terminado",
      };
    }
  }
  static async createNewR(body) {//TERMINADA
    try {
      const values =[body.fecha_registro, body.Coliformes, body.E_coli, body.Mohos_levaduras, body.observaciones, body.id_producto_proceso, body.id_producto_terminado]
      const [rows] = await conexion.execute(
        "INSERT INTO resultado (fecha_registro, Coliformes, E_coli, Mohos_levaduras, observaciones, id_producto_proceso, id_producto_terminado)VALUES   (?,?,?,?,?,?,?)",
      values);
      if (rows.affectedRows > 0) {
        return rows;
      } else {
        return {
          message: "No se pudo crear el resultado",
        };
      }
    } catch (error) {
      console.error("Error al crear el resultado", error);
      return {
        message: "Error al crear el resultado",
      };
    }
  }
  static async updatePP(id, body) {
    const values = [body.fecha_analisis , body.fecha_toma_muestra , body.nombre_producto , body.saborizacion , body.tanque , body.tanque_alt , body.hora_toma_muestra , body.lote , body.responsable_analisis , body.observaciones]
    const aidi = id
    const consulta =`UPDATE producto_proceso SET fecha_analisis =?, fecha_toma_muestra =?, nombre_producto =?, saborizacion =?, tanque =?, tanque_alt =?, hora_toma_muestra =?, lote =?, responsable_analisis =?, observaciones=? WHERE id_producto_proceso = '${aidi}'`
    
    try {
      const rows = await conexion.execute(`UPDATE producto_proceso SET fecha_analisis =?, fecha_toma_muestra =?, nombre_producto =?, saborizacion =?, tanque =?, tanque_alt =?, hora_toma_muestra =?, lote =?, responsable_analisis =?, observaciones=? WHERE id_producto_proceso = '${aidi}'`,values)

      
      if (rows[0].affectedRows > 0) {
        return {message :`El producto en proceso con id ${id} fue actualizado correctamente`,
        rows :rows}
      } else {
        return { message: `No se encontro un producto con el id ${id}` }
      }
    } catch (error) {
      console.error("Error al actualizar el producto en proceso", error)
      throw error;
      
    }
  }
  static async updatePT(id,body) {
    try {
      const rows = await conexion.execute(`UPDATE producto_proceso SET fecha_analisis, fecha_toma_muestra, nombre_producto, saborizacion, tanque, tanque_alt, hora_toma_muestra, lote, responsable_analisis, observaciones WHERE id_producto_proceso = 'LOTE005_200_m2'`)
  
      if (rows.length > 0) {
        return rows
      } else {
        return { message: "No se encontró el producto en proceso con ese id" }
      }
    } catch (error) {
      console.error("Error al actualizar el producto en proceso", error)
      return { message: "Error al actualizar el producto en proceso" }
    }
  }
  static async deletePP(id) {
    console.log(id);
    const aidi = id.id
    try {

      const rows = await conexion.execute("DELETE FROM producto_proceso WHERE id_producto_proceso = ?",[aidi])

      if (rows.affectedRows > 0) {
        return rows
      } else {
        return { message: "No se encontró el producto en proceso con el ID ="+id }
      }
    } catch (error) {
      console.error("Error al eliminar el producto en proceso", error)
      return { message: "Error al eliminar el producto en proceso" }
    }
  }
  static async deletePT(id) {
    try {
      const rows = await conexion.execute("DELETE FROM producto_terminado WHERE id_producto_terminado = ?")

      if (rows.length > 0) {
        return rows
      } else {
        return { message: "No se encontró el producto terminado con ese ID" }
      }
    } catch (error) {
      console.error("Error al eliminar el producto terminado", error)
      return { message: "Error al eliminar el producto terminado" }
    }
  }
}
