import { Router } from "express";
import { validarAnalista } from "../middleware/validarAnalista.js";
import {getSaborizacion,createSaborizacion,updateSaborizacion,deleteSaborizacion,getResultId,getAllWithPP,getAllPP,getAllPT,getAllR,createNewPP,createNewPT,updatePP,updatePT, deletePP, deletePT,createNewR} from "../controller/controllers.js";
import { pP,pT,r, parcialPP} from "../middleware/validaciones.js";

export const routerProductos = Router();

routerProductos
  //Saborizacion
  .post("/registrar_saborizacion",createSaborizacion)
  .get("/registrar_saborizacion",getSaborizacion)
  .patch("/registrar_saborizacion",updateSaborizacion)
  .delete("/eliminar_saborizacion",deleteSaborizacion)
  //----------------------------------------------------------------

  //Obtener resultados por id 
  .get("/obtenerResultadosId",getResultId)

  //RUTAS DE OBTENER PP,PT Y R TERMINADAS
  .get("/producto_terminado_nom_pp",validarAnalista, getAllWithPP)//PT con nombre asociado de pp
  .get("/producto_proceso",validarAnalista, getAllPP)
  .get("/producto_terminado",validarAnalista, getAllPT)
  .get("/resultado", validarAnalista, getAllR)

  //--------------------------------------

  // RUTAS CON VALIDACIONES IMPLEMENTADAS
  .post("/registrar_pp",validarAnalista, pP, createNewPP )
  .post("/registrar_pt",validarAnalista, pT, createNewPT)
  .post("/registrar_r",validarAnalista, r, createNewR)
  //------------------------------------------

  //RUTAS DE ELIMINAR 
  .delete("/eliminar_productoP/:id?",validarAnalista, deletePP)
  .delete("/eliminar_productoT/:id?",validarAnalista, deletePT)
  //-----------------------------------------


  //RUTAS DE ACTUALIZAR 
  .put('/actualizar_pp/:id',validarAnalista, parcialPP, updatePP)
  .put('/actualizar_terminado/:id',validarAnalista, updatePT)