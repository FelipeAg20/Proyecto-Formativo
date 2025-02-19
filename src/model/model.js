import { conexion } from "../db/conexion.js";
export class modelos {
  //saborizacion
  static async createSaborizacion(body) {
    try {
      const values = [
        body.sabor,
        body.fecha_analisis,
        body.fecha_toma_muestra,
        body.hora_toma_muestra,
        body.tanque,
        body.lote,
        body.observaciones ?? null,
        body.responsable_analisis,
      ];

      const [rows] = await conexion.execute(
        `INSERT INTO saborizacion 
              (sabor, fecha_analisis, fecha_toma_muestra, hora_toma_muestra, tanque, lote, observaciones, responsable_analisis) 
              VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        values
      );

      if (rows.affectedRows > 0) {
        return {
          success: true,
          message: "Éxito creando la nueva saborización",
          insertedId: rows.insertId,
        };
      } else {
        return {
          success: false,
          message: "Error creando la nueva saborización",
        };
      }
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Error interno al crear la nueva saborización",
        error: error,
      };
    }
  }
  static async getAllSaborizacion() {
    try {
      const [rows] = await conexion.execute("SELECT * FROM `saborizacion`");

      if (rows.length > 0) {
        return {
          success: true,
          message: "Éxito trayendo las saborizaciones",
          result: rows,
        };
      } else {
        return {
          success: true,
          message: "No se encontraron saborizaciones",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "Error al traer las saborizaciones",
        error: error,
      };
    }
  }
  static async updateSaborizacion(id, body) {
    const values = [
      body.sabor,
      body.fecha_analisis,
      body.fecha_toma_muestra,
      body.hora_toma_muestra,
      body.tanque,
      body.lote,
      body.observaciones ?? null,
      body.responsable_analisis,
    ];

    try {
      const [rows] = await conexion.execute(
        `UPDATE saborizacion 
             SET sabor = ?, fecha_analisis = ?, fecha_toma_muestra = ?, 
                 hora_toma_muestra = ?, tanque = ?, lote = ?, 
                 observaciones = ?, responsable_analisis = ? 
             WHERE id = ?`,
        [...values, id]
      );

      if (rows.affectedRows > 0) {
        return {
          success: true,
          message: "Éxito actualizando la saborización",
        };
      } else {
        return {
          success: false,
          message: "No se encontró la saborización o no se realizaron cambios",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "Error interno al actualizar la saborización",
        error: error,
      };
    }
  }
  static async deleteSaborizacion(id) {
    try {
      const [rows] = await conexion.execute(
        "DELETE FROM saborizacion WHERE id = ?",
        [id]
      );

      if (rows.affectedRows > 0) {
        return {
          success: true,
          message: "Éxito eliminando la saborización",
        };
      } else {
        return {
          success: false,
          message: "No se encontró la saborización o ya fue eliminada",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "Error interno al eliminar la saborización",
        error: error,
      };
    }
  }
  //----------------------------------------------------------------
  //Obtener resultados por id
  static async getResultId(body) {
    let id = null;
    let campo = null;

    try {
      switch (true) {
        case !!body.id_pp:
          id = body.id_pp;
          campo = "id_pp";
          break;
        case !!body.id_pt:
          id = body.id_pt;
          campo = "id_pt";
          break;
        case !!body.id_sb:
          id = body.id_sb;
          campo = "id_sb";
          break;
        default:
          return {
            success: false,
            message: "No se proporcionó un ID válido",
          };
      }

      const [rows] = await conexion.execute(
        `SELECT r.* FROM resultados r WHERE r.${campo} = ?`,
        [id]
      );

      if (rows.length > 0) {
        return {
          success: true,
          message: "Éxito al obtener los resultados",
          result: rows,
        };
      } else {
        return {
          success: true,
          message: "No se encontraron resultados",
        };
      }
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Error al obtener resultados",
        error,
      };
    }
  }
  //----------------------------------------------------------------
  static async getUsuarioPorId(id) {
    try {
      const [rows] = await conexion.execute(
        "SELECT nombre, rol FROM usuarios WHERE id = ?",
        [id]
      );

      if (rows.length > 0) {
        return {
          success: true,
          message: "Éxito trayendo el usuario",
          result: rows[0],
        };
      } else {
        return {
          success: true,
          message: "No se encontró el usuario",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "Error al traer el usuario",
        error: error,
      };
    }
  }
  static async getAllWithPP() {
    try {
      const [rows] = await conexion.execute(`
                SELECT pt.*, pp.nombre_pp
                FROM producto_terminado pt
                JOIN producto_proceso pp ON pt.id_producto_proceso = pp.id
            `);

      if (rows.length > 0) {
        return {
          success: true,
          message: "Éxito al obtener los productos terminados",
          result: rows,
        };
      } else {
        return {
          success: true,
          message: "No se encontraron productos terminados",
        };
      }
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Error al obtener los productos terminados",
        error,
      };
    }
  }

  static async getAllPT() {
    //TERMINADA
    try {
      const [rows] = await conexion.execute(
        "SELECT * FROM `producto_terminado`"
      );

      if (rows.length > 0) {
        return {
          success: true,
          message: "Exito trayendo los productos terminados",
          result: rows,
        };
      } else {
        return {
          success: true,
          message: "No se encontraron productos terminados",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "Error al traer los productos terminados",
        error: error,
      };
    }
  }
  static async getAllR() {
    //TERMINADA
    try {
      const rows = await conexion.execute("SELECT * FROM `resultados`");

      if (rows.length > 0) {
        return {
          success: true,
          message: "Exito trayendo los resultados",
          result: rows,
        };
      } else {
        return { success: true, message: "No se encontraron resultados" };
      }
    } catch (error) {
      return {
        success: false,
        message: "Error al traer los productos terminados",
        error: error,
      };
    }
  }
  static async getDatePP() {
    try {
      const rows = await conexion.execute(
        "SELECT * FROM resultados WHERE fecha_analisis= ? ",
        [body.fecha_registro]
      );

      if (rows.length > 0) {
        return {
          success: true,
          message: "Exito trayendo los resultados por fecha",
          result: rows,
        };
      } else {
        return {
          success: true,
          message: "No se encontraron resultados en esa fecha",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "Error al traer los resultados por fecha",
        error: error,
      };
    }
  }

  static async createNewPP(body) {
    try {
      const values = [
        body.nombre_pp,
        body.fecha_analisis,
        body.fecha_toma_muestra,
        body.hora_toma_muestra,
        body.lote,
        body.observaciones ?? null,
        body.responsable_analisis,
        body.punto_muestra,
        body.punto_alterno ?? null,
      ];

      const [rows] = await conexion.execute(
        "INSERT INTO producto_proceso (nombre_pp, fecha_analisis, fecha_toma_muestra, hora_toma_muestra, lote, observaciones, responsable_analisis, punto_muestra, punto_alterno) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        values
      );

      if (rows.affectedRows > 0) {
        return {
          success: true,
          message: "Éxito creando el nuevo producto en proceso",
        };
      } else {
        return {
          success: false,
          message: "Error creando el nuevo producto en proceso",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "Error interno al crear el nuevo producto en proceso",
        error: error,
      };
    }
  }

  static async createNewPT(body) {
    try {
      //Crear la funcion que cree el id con base a los datos del producto en proceso referenciado en => body.id_producto_proceso

      const values = [
        // id    tenga la funcion, cambia pone la variable aqui de primera y se melo
        body.fecha_analisis,
        body.fecha_env,
        body.fecha_vencimiento,
        body.ref,
        body.presentacion,
        body.lote,
        body.hora_empaque,
        body.maquina_envasadora,
        body.observaciones ?? null,
        body.responsable_analisis,
        body.id_producto_proceso,
      ];
      console.log(body);

      const [rows] = await conexion.execute(
        "INSERT INTO producto_terminado ( id, fecha_analisis, fecha_env, fecha_vencimiento, ref, presentacion, lote, hora_empaque, maquina_envasadora, observaciones,responsable_analisis, id_producto_proceso ) VALUES  (?,?,?,?,?,?,?,?,?,?,?,?)",
        values
      );
      if (rows.affectedRows > 0) {
        return {
          success: true,
          message: "Exito creando el nuevo producto terminado",
        };
      } else {
        return {
          success: false,
          message: "Error creando el nuevo producto terminado",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "Error interno al crear el nuevo producto terminado",
        error: error,
      };
    }
  }

  static async createNewR(body) {
    //TERMINADA
    try {
      const values = [
        body.fecha_analisis,
        body.e_coli,
        body.coliformes,
        body.mohos_ley,
        body.observaciones ?? null,
        body.cabina ?? null,
        body.medio_cultivo ?? null,
        body.id_pp ?? null,
        body.id_pt ?? null,
        body.responsable_analisis,
      ];
      const [rows] = await conexion.execute(
        "INSERT INTO resultados (fecha_analisis, e_coli, coliformes, mohos_ley, observaciones, cabina, medio_cultivo, id_pp, id_pt, responsable_analisis)VALUES   (?,?,?,?,?,?,?,?,?,?)",
        values
      );
      if (rows.affectedRows > 0) {
        return {
          success: true,
          message: "Exito ingresando el nuevo resultado",
        };
      } else {
        return {
          success: false,
          message: "Error ingresando el nuevo resultado",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "Error interno al ingresar el nuevo resultado",
        error: error,
      };
    }
  }

  static async updatePP(id, body) {
    const values = [
      body.fecha_analisis,
      body.fecha_toma_muestra,
      body.nombre_producto,
      body.saborizacion,
      body.tanque,
      body.tanque_alt,
      body.hora_toma_muestra,
      body.lote,
      body.responsable_analisis,
      body.observaciones,
    ];
    const aidi = id;
    const consulta = `UPDATE producto_proceso SET fecha_analisis =?, fecha_toma_muestra =?, nombre_producto =?, saborizacion =?, tanque =?, tanque_alt =?, hora_toma_muestra =?, lote =?, responsable_analisis =?, observaciones=? WHERE id_producto_proceso = '${aidi}'`;

    try {
      const rows = await conexion.execute(
        `UPDATE producto_proceso SET fecha_analisis =?, fecha_toma_muestra =?, nombre_producto =?, saborizacion =?, tanque =?, tanque_alt =?, hora_toma_muestra =?, lote =?, responsable_analisis =?, observaciones=? WHERE id_producto_proceso = '${aidi}'`,
        values
      );

      if (rows.affectedRows > 0) {
        return {
          success: true,
          message: "Exito actualizando el producto en proceso",
        };
      } else {
        return {
          success: false,
          message: "Error actualizando el producto en proceso",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "Error interno al actualizar el producto en proceso",
        error: error,
      };
    }
  }

  static async updatePT(id, body) {
    try {
      const rows = await conexion.execute(
        `UPDATE producto_proceso SET fecha_analisis, fecha_toma_muestra, nombre_producto, saborizacion, tanque, tanque_alt, hora_toma_muestra, lote, responsable_analisis, observaciones WHERE id_producto_proceso = 'LOTE005_200_m2'`
      );

      if (rows.affectedRows > 0) {
        return {
          success: true,
          message: "Exito actualizando el producto terminado",
        };
      } else {
        return {
          success: false,
          message: "Error actualizando el producto terminado",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "Error interno al actualizar el producto terminado",
        error: error,
      };
    }
  }

  static async deletePP(id) {
    console.log(id);
    const aidi = id.id;
    try {
      const rows = await conexion.execute(
        "DELETE FROM producto_proceso WHERE id_producto_proceso = ?",
        [aidi]
      );

      if (rows.affectedRows > 0) {
        return {
          success: true,
          message: "Exito eliminando el producto en proceso",
        };
      } else {
        return {
          success: false,
          message: "Error eliminando el producto en proceso",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "Error interno al eliminar el producto en proceso",
        error: error,
      };
    }
  }

  static async deletePT(id) {
    try {
      const rows = await conexion.execute(
        "DELETE FROM producto_terminado WHERE id_producto_terminado = ?"
      );

      if (rows.affectedRows > 0) {
        return {
          success: true,
          message: "Exito eliminando el producto terminado",
        };
      } else {
        return {
          success: false,
          message: "Error eliminando el producto terminado",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "Error interno al eliminar el producto terminado",
        error: error,
      };
    }
  }
}
