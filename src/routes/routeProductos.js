import { Router } from "express";
import { conexion } from "../db/conexion.js";
import { getAllPP,getAllPT,getAllR,createNewPP,createNewPT,updatePP,updatePT, deletePP, deletePT,createNewR} from "../controller/controllers.js";
import { pP,pT,r, parcialPP} from "../middleware/validaciones.js";
export const routerProductos = Router();

router

  //RUTAS DE OBTENER PP,PT Y R TERMINADAS
  .get("/producto_proceso", getAllPP)
  .get("/producto_terminado", getAllPT)
  .get("/resultado", getAllR)

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