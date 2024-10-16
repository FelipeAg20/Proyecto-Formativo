import { conexion } from "../db/conexion.js";
export class modelos {
  static async getAllPP() {
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
  static async getAllPT() {
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
  static async getAllR() {
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
  static async createNewPP(body) {
    try {
      const rows = await conexion.execute(
        " INSERT INTO producto_proceso (    fecha_analisis, fecha_toma_muestra, nombre_producto, saborizacion, tanque, tanque_alt, hora_toma_muestra, lote, responsable_analisis, observaciones, id_producto_proceso  ) VALUES    ('2024-10-05', '2024-10-04', '16:30:00', 'REF005', '200', 'm2',   'LOTE005', 2, 'Producto empaquetado correctamente', 'LOTE005_200_m2')"
      );
      if (rows.length > 0) {
        return rows;
      } else {
        return {
          message: "No se pudo crear el producto en proceso ",
        };
      }
    } catch (error) {
      console.error("Error al crear el productos en proceso", error);
      return {
        message: "Error al crear el productos en proceso",
      };
    }
  }
  static async createNewPT(body) {
    try {
      const rows = await conexion.execute(
        "INSERT INTO producto_terminado (  fecha_analisis, fecha_empaque, hora_empaque, referencia, presentacion, maquina_envasadora, lote, responsable_analisis, observaciones, id_producto_terminado  ) VALUES  ('2024-10-04', '2024-10-03', '15:00:00', 'REF004', '1000', 'm1',    'LOTE004', 1, 'Lote terminado correctamente', 'LOTE004_1000_m1')"
      );
      if (rows.length > 0) {
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
  static async updatePP(id, body) {
    try {
      const rows = await conexion.execute(`UPDATE producto_proceso SET fecha_analisis, fecha_toma_muestra, nombre_producto, saborizacion, tanque, tanque_alt, hora_toma_muestra, lote, responsable_analisis, observaciones WHERE id_producto_proceso = 'LOTE005_200_m2'`)
  
      if (rows.length > 0) {
        return rows
      } else {
        return { message: "No se encontró el producto en proceso con ese id" }
      }
    } catch (error) {
      console.error("Error al actualizar el producto en proceso", error)
      return {  
        message: "Error al actualizar el producto en proceso" 
      };
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
    try {
      const rows = await conexion.execute("DELETE FROM producto_proceso WHERE id_producto_proceso = ?")

      if (rows.length > 0) {
        return rows
      } else {
        return { message: "No se encontró el producto en proceso con ese ID" }
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
