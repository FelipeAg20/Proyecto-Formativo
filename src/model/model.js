import { conexion } from "../db/conexion.js";
export class modelos {
  static async getAllPP() {//TERMINADA
    try {
      const [rows] = await conexion.execute("SELECT * FROM `producto_proceso`");

      if (rows.length > 0) {
        return { success: true, message: "Exito trayendo los productos en proceso", result: rows };
      } else {
        return { success: true, message: "No se encontraron productos en proceso" };
      }
    } catch (error) {
      return { success: false, message: "Error al traer los productos en proceso", error: error };
    }
  }
  static async getAllPT() {//TERMINADA
    try {
      const [rows] = await conexion.execute("SELECT * FROM `producto_terminado`");

      if (rows.length > 0) {
        return { success: true, message: "Exito trayendo los productos terminados", result: rows };
      } else {
        return { success: true, message: "No se encontraron productos terminados" };
      }
    } catch (error) {
      return { success: false, message: "Error al traer los productos terminados", error: error };
    }
  }
  static async getAllR() {//TERMINADA
    try {
      const rows = await conexion.execute("SELECT * FROM `resultados`");

      if (rows.length > 0) {
        return { success: true, message: "Exito trayendo los resultados", result: rows };
      } else {
        return { success: true, message: "No se encontraron resultados" };
      }
    } catch (error) {
      return { success: false, message: "Error al traer los productos terminados", error: error };
    }
  }
  static async getDatePP() {
    try {
      const rows = await conexion.execute("SELECT * FROM resultados WHERE fecha_analisis= ? ", [body.fecha_registro]);

      if (rows.length > 0) {
        return { success: true, message: "Exito trayendo los resultados por fecha", result: rows };
      } else {
        return { success: true, message: "No se encontraron resultados en esa fecha" };
      }
    } catch (error) {
      return { success: false, message: "Error al traer los resultados por fecha", error: error };
    }
  }

  static async createNewPP(body) {
    try {
      console.log(body);
      
      const values = [
        body.nombre_pp, body.fecha_analisis, body.fecha_toma_muestra,
        body.hora_toma_muestra, body.lote, body.observaciones ?? null,
        body.responsable_analisis, body.punto_muestra, body.punto_alterno ?? null
      ];
  
      const [rows] = await conexion.execute(
        "INSERT INTO producto_proceso (nombre_pp, fecha_analisis, fecha_toma_muestra, hora_toma_muestra, lote, observaciones, responsable_analisis, punto_muestra, punto_alterno) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        values
      );
  
      if (rows.affectedRows > 0) {
        return { success: true, message: "Éxito creando el nuevo producto en proceso" };
      } else {
        return { success: false, message: "Error creando el nuevo producto en proceso" };
      }
    } catch (error) {
      return { success: false, message: "Error interno al crear el nuevo producto en proceso", error: error };
    }
  }

  static async createNewPT(body) {//TERMINADA
    try {
      const values =[ body.fecha_env, body.fecha_vencimiento, body.ref, 
        body.presentacion, body.lote, body.hora_empaque, body.maquina_envasadora, 
        body.observaciones ?? null, body.responsable_analisis, body.id_producto_proceso  ]
      const [rows] = await conexion.execute(
        "INSERT INTO producto_terminado ( fecha_env, fecha_vencimiento, ref, presentacion, lote, hora_empaque, maquina_envasadora, observaciones,responsable_analisis, id_producto_proceso ) VALUES  (?,?,?,?,?,?,?,?,?,?)",
      values);
      if (rows.affectedRows > 0) {
        return { success: true, message: "Exito creando el nuevo producto terminado"};
      } else {
        return { success: false, message: "Error creando el nuevo producto terminado"};
      }
    } catch (error) {
      return { success: false, message: "Error interno al crear el nuevo producto terminado", error: error };
    }
  }

  static async createNewR(body) {//TERMINADA
    try {
      const values =[body.fecha_analisis, body.e_coli, body.coliformes, body.mohos_ley, body.observaciones ?? null, body.cabina ?? null, body.medio_cultivo ?? null, body.id_pp ?? null, body.id_pt ?? null]
      const [rows] = await conexion.execute(
        "INSERT INTO resultados (fecha_analisis, e_coli, coliformes, mohos_ley, observaciones, cabina, medio_cultivo, id_pp, id_pt)VALUES   (?,?,?,?,?,?,?,?,?)",
      values);
      if (rows.affectedRows > 0) {
        return { success: true, message: "Exito ingresando el nuevo resultado"};
      } else {
        return { success: false, message: "Error ingresando el nuevo resultado"};
      }
    } catch (error) {
      return { success: false, message: "Error interno al ingresar el nuevo resultado", error: error };
    }
  }
  
  static async updatePP(id, body) {
    const values = [body.fecha_analisis , body.fecha_toma_muestra , body.nombre_producto , body.saborizacion , body.tanque , body.tanque_alt , body.hora_toma_muestra , body.lote , body.responsable_analisis , body.observaciones]
    const aidi = id
    const consulta =`UPDATE producto_proceso SET fecha_analisis =?, fecha_toma_muestra =?, nombre_producto =?, saborizacion =?, tanque =?, tanque_alt =?, hora_toma_muestra =?, lote =?, responsable_analisis =?, observaciones=? WHERE id_producto_proceso = '${aidi}'`
    
    try {
      const rows = await conexion.execute(`UPDATE producto_proceso SET fecha_analisis =?, fecha_toma_muestra =?, nombre_producto =?, saborizacion =?, tanque =?, tanque_alt =?, hora_toma_muestra =?, lote =?, responsable_analisis =?, observaciones=? WHERE id_producto_proceso = '${aidi}'`,values)

      
      if (rows.affectedRows > 0) {
        return { success: true, message: "Exito actualizando el producto en proceso"};
      } else {
        return { success: false, message: "Error actualizando el producto en proceso"};
      }
    } catch (error) {
      return { success: false, message: "Error interno al actualizar el producto en proceso", error: error };
    }
  }

  static async updatePT(id,body) {
    try {
      const rows = await conexion.execute(`UPDATE producto_proceso SET fecha_analisis, fecha_toma_muestra, nombre_producto, saborizacion, tanque, tanque_alt, hora_toma_muestra, lote, responsable_analisis, observaciones WHERE id_producto_proceso = 'LOTE005_200_m2'`)
  
      if (rows.affectedRows > 0) {
        return { success: true, message: "Exito actualizando el producto terminado"};
      } else {
        return { success: false, message: "Error actualizando el producto terminado"};
      }
    } catch (error) {
      return { success: false, message: "Error interno al actualizar el producto terminado", error: error };
    }
  }

  static async deletePP(id) {
    console.log(id);
    const aidi = id.id
    try {

      const rows = await conexion.execute("DELETE FROM producto_proceso WHERE id_producto_proceso = ?",[aidi])

      if (rows.affectedRows > 0) {
        return { success: true, message: "Exito eliminando el producto en proceso"};
      } else {
        return { success: false, message: "Error eliminando el producto en proceso"};
      }
    } catch (error) {
      return { success: false, message: "Error interno al eliminar el producto en proceso", error: error };
    }
  }

  static async deletePT(id) {
    try {
      const rows = await conexion.execute("DELETE FROM producto_terminado WHERE id_producto_terminado = ?")

      if (rows.affectedRows > 0) {
        return { success: true, message: "Exito eliminando el producto terminado"};
      } else {
        return { success: false, message: "Error eliminando el producto terminado"};
      }
    } catch (error) {
      return { success: false, message: "Error interno al eliminar el producto terminado", error: error };
    }
  }
}
