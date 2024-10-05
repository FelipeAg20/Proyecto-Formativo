import { Router } from "express";
import { conexion } from "./conexion.js";


export const router = Router();

router
  .get("/producto_proceso", (req, res) => {
    conexion.query("SELECT * FROM `producto_proceso`", (err, results) => {
      if (err) {
        throw err;
      } else {
        res.send(results).status(200);
        console.log(results);
      }
    });
  })
  .get("/producto_terminado", (req, res) => {
    conexion.query("SELECT * FROM `producto_terminado`", (err, results) => {
      if (err) {
        throw err;
      } else {
        res.send(results).status(200);
        console.log(results);
      }
    });
  })
  .get("/resultado", (req, res) => {
    conexion.query("SELECT * FROM `resultado`", (err, results) => {
      if (err) {
        throw err;
      } else {
        res.send(results).status(200);
        console.log(results);
      }
    });
  })
  .get("/:id", (req, res) => {
    const id = req.params.id;
    conexion.query(
      "SELECT * FROM `pelicula` where id=?",
      [id],
      (err, results) => {
        if (err) {
          throw err;
        } else {
          res.send(results).status(200);
          console.log(results);
        }
      }
    );
  })

  .post("/registrar_pp", (req, res) => {
    
      conexion.query(
        "INSERT INTO `producto_proceso` (fecha_analisis, fecha_toma_muestra, nombre_producto, saborizacion, tanque, tanque_alt,  hora_toma_muestra, lote, responsable_analisis, observaciones, id_producto_proceso) VALUES ('2024-10-01', '2024-09-30', 'bebida pasteurizada', 'fresa', 'Tanque 7', NULL, '08:00:00', 'LOTE001', 1, 'Muestra inicial sin alteraciones', 'LOTE070FresaTanque7')",
        
        (err, results) => {
          if (err) {
            throw err;
          } else {
            res.send(results).status(200);
            console.log(`Elemnto creado con exito`);
          }
        }
      );
    }
  )
  
  .post("/registrar_pt", (req, res) => {
    conexion.query(
      "INSERT INTO producto_terminado ( fecha_analisis, fecha_empaque, hora_empaque, referencia, presentacion, maquina_envasadora,  lote, responsable_analisis, observaciones, id_producto_terminado) VALUES ('2024-10-01', '2024-09-30', '14:00:00', 'REF001', '1000', 'm1', 'LOTE070', 1, 'Lote terminado sin alteraciones', 'LOTE070_1000_m1')",
      
      (err, results) => {
        if (err) {
          throw err;
        } else {
          res.send(results).status(200);
          console.log(`Elemnto creado con exito`);
        }
      }
    );
  })
  .delete("/eliminar_productoP:id",(req, res) =>{
    const id = req.params.id
    conexion.query('DELETE FROM `producto_proceso` WHERE `id`= ?',[id],(err) =>{
        if(err){
            throw err;
        }else{
            res.status(200 ).send(`Elemto de id : ${id}Eliminado`);
        }
    })
  })
  .delete("/eliminar_productoT:id",(req, res) =>{
    const id = req.params.id
    conexion.query('DELETE FROM `producto_proceso` WHERE `id`= ?',[id],(err) =>{
        if(err){
            throw err;
        }else{
            res.status(200 ).send(`Elemto de id : ${id}Eliminado`);
        }
    })
  })
  .patch("/:id",(req, res) =>{
    
  })