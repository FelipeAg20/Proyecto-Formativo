import { Router } from "express";
import { conexion } from "../db/conexion.js";
import { getAllPP,getAllPT,getAllR,createNewPP,createNewPT} from "../controller/controllers.js";

export const router = Router();

router
  .get("/producto_proceso", getAllPP)
  .get("/producto_terminado", getAllPT)
  .get("/resultado", getAllR)
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

  .post("/registrar_pp",createNewPP )
  .post("/registrar_pt", createNewPT)
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