import { Router } from "express";
import { validarAnalista } from "../middleware/validarAnalista.js";
import {get24oNo24Pp,get24oNo24Pt,get24oNo24Sb,getResultadosConFecha5d,getResultadosIncompletos,createResultado,updateResultado,getSaborizacion,createSaborizacion,updateSaborizacion,deleteSaborizacion,getResultId,getAllWithPP,getAllPP,getAllPT,getAllR,createNewPP,createNewPT,updatePP,updatePT, deletePP, deletePT,createNewR} from "../controller/controllers.js";
import { pP,pT,sB,r, parcialPP, rU} from "../middleware/validaciones.js";

export const routerProductos = Router();

routerProductos

//Infomes 24 o sin 24
  .get("/muestras_pp_incompletos",validarAnalista,get24oNo24Pp)
  .get("/muestras_pt_incompletos",validarAnalista,get24oNo24Pt)
  .get("/muestras_sb_incompletos",validarAnalista,get24oNo24Sb)
  //Resultados 5d
  .get("/resultados_5d",getResultadosConFecha5d)
  .get("/resultados_incompletos",getResultadosIncompletos)
  //Resultado
  .post("/registrar_resultado",r,validarAnalista, createResultado)
  .patch("/registrar_resultado_actualizado",rU,validarAnalista, updateResultado)
  //Saborizacion
  .post("/registrar_saborizacion",validarAnalista,sB, createSaborizacion)
  .get("/registrar_saborizacion",validarAnalista, getSaborizacion)
  .patch("/registrar_saborizacion",validarAnalista, updateSaborizacion)
  .delete("/eliminar_saborizacion",validarAnalista, deleteSaborizacion)
  //----------------------------------------------------------------

  //Obtener resultados por id 
  .post("/obtenerResultadosId",validarAnalista,getResultId)

  //RUTAS DE OBTENER PP,PT Y R TERMINADAS
  .get("/producto_terminado_nom_pp",validarAnalista, getAllWithPP)//PT con nombre asociado de pp
  .get("/producto_proceso",validarAnalista, getAllPP)
  .get("/producto_terminado",validarAnalista, getAllPT)
  .get("/resultado", validarAnalista, getAllR)

  //--------------------------------------

  // RUTAS CON VALIDACIONES IMPLEMENTADAS
  .post("/registrar_pp",validarAnalista, pP, createNewPP )
  .post("/registrar_pt",validarAnalista, pT, createNewPT)
  //------------------------------------------

  //RUTAS DE ELIMINAR 
  .delete("/eliminar_productoP/:id?",validarAnalista, deletePP)
  .delete("/eliminar_productoT/:id?",validarAnalista, deletePT)
  //-----------------------------------------


  //RUTAS DE ACTUALIZAR 
  .put('/actualizar_pp/:id',validarAnalista, parcialPP, updatePP)
  .put('/actualizar_terminado/:id',validarAnalista, updatePT)