import { Router } from "express";
import { conexion } from "../db/conexion.js";
import { getAllPP,getAllPT,getAllR,createNewPP,createNewPT,updatePP,updatePT, deletePP, deletePT,createNewR} from "../controller/controllers.js";
import { pP,pT,r, parcialPP} from "../middleware/validaciones.js";
import { register } from "../controller/controllerRegister.js";
import { login } from "../controller/controllerLogin.js";
import { validarRutaRegister } from "../middleware/validacionRutaRegister.js";
export const router = Router();

router
  //RUTA PARA REGISTRARSE
  .post("/register",validarRutaRegister,register)
  //RUTA PARA LOGIN 
  .post("/login",login)


  //RUTAS DE OBTENER PP,PT Y R TERMINADAS
  .get("/producto_proceso", getAllPP)
  .get("/producto_terminado", getAllPT)
  .get("/resultado", getAllR)

  //----------------------------------------

  //BUSCAR POR FECHA A MEDIAS   
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
  //--------------------------------------

  // RUTAS CON VALIDACIONES IMPLEMENTADAS
  .post("/registrar_pp",pP, createNewPP )
  .post("/registrar_pt",pT, createNewPT)
  .post("/registrar_r",r, createNewR)
  //------------------------------------------

  //RUTAS DE ELIMINAR 
  .delete("/eliminar_productoP/:id?",deletePP)
  .delete("/eliminar_productoT/:id?",deletePT)
  //-----------------------------------------


  //RUTAS DE ACTUALIZAR 
  .put('/actualizar_pp/:id',parcialPP, updatePP)
  .put('/actualizar_terminado/:id', updatePT)