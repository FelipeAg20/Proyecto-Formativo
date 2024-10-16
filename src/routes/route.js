import { Router } from "express";
import { conexion } from "../db/conexion.js";
import { getAllPP,getAllPT,getAllR,createNewPP,createNewPT,updatePP,updatePT, deletePP, deletePT} from "../controller/controllers.js";

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
  .put('/producto_proceso/:id', updatePP)
  .put('/producto_terminado/:id', updatePT)
  .delete("/eliminar_productoP:id",deletePP)
  .delete("/eliminar_productoT:id",deletePT)