import { modelos } from "../model/model.js";

export const getAllPP = async (req, res) => {//TERMINADA
  //Controlador productos terminado
  try {
    const allPP = await modelos.getAllPP();
    if(!(allPP.success) && allPP.error ){
      res.status(500).json(allPP);
    }else{
      res.status(200).json(allPP);
    }
  } catch (err) {
    res.status(500).json({success: false, message: "Error interno", error: err });
  }
};
export const getAllPT = async (req, res) => {//TERMINADA
  //Controlador productos terminado
  try {
    const allPT = await modelos.getAllPT();
    if(!(allPT.success) && allPT.error ){
      res.status(500).json(allPT);
    }else{
      res.status(200).json(allPT);
    }
  } catch (err) {
    res.status(500).json({success: false, message: "Error interno", error: err });
  }
};
export const getAllR = async (req, res) => {//TERMINADA
  //Controlador Resultados
  try {
    const allR = await modelos.getAllR();
    if(!(allR.success) && allR.error ){
      res.status(500).json(allR);
    }else{
      res.status(200).json(allR);
    }
  } catch (err) {
    res.status(500).json({success: false, message: "Error interno", error: err });
  }
};
/*
export const getDatePP = async (req, res) => {//sin terminar
  //Controlador productos terminados por fecha
  try {
    const resultDate = await modelos.getOneWorkout(req.params.workoutId);
    res.status(200).json(resultDate);
  } catch (err) {
    res.status(500).json({ success: false, message: "Error obteniendo todos los pp", error: err });
  }
};
*/
export const createNewPP = async (req, res) => {//TERMINADA
  try {
    const reqBody = req.body;
    const newPP = await modelos.createNewPP(reqBody);
    if(!(newPP.success) && newPP.error ){
      res.status(500).json(newPP);
    }else if (!newPP.success){
      res.status(500).json(newPP);
    }else{
      res.status(201).json(newPP);
    }
  } catch (err) {
    res.status(500).json({success: false, message: "Error interno", error: err });
  }
};
export const createNewPT = async (req, res) => {//TERMINADA
  try {
    const reqBody = req.body;
    const newPT = await modelos.createNewPT(reqBody);
    if(!(newPT.success) && newPT.error ){
      res.status(500).json(newPT);
    }else if (!newPT.success){
      res.status(500).json(newPT);
    }else{
      res.status(201).json(newPT);
    }
  } catch (err) {
    res.status(500).json({success: false, message: "Error interno", error: err });
  }
};
export const createNewR = async (req, res) => {//TERMINADA
  try {
    const reqBody = req.body;
    const newR = await modelos.createNewR(reqBody);
    if(!(newR.success) && newR.error ){
      res.status(500).json(newR);
    }else if (!newR.success){
      res.status(500).json(newR);
    }else{
      res.status(201).json(newR);
    }
  } catch (err) {
    res.status(500).json({success: false, message: "Error interno", error: err });
  }
};
export const updatePP = async (req, res) => {//sin terminar
  try {
    const reqBody = req.body
    const id = req.params.id

    const updatedPP = await modelos.updatePP(id, reqBody);
    if(!(updatedPP.success) && updatedPP.error ){
      res.status(500).json(updatedPP);
    }else if (!updatedPP.success){
      res.status(500).json(updatedPP);
    }else{
      res.status(200).json(updatedPP);
    }
} catch (err) {
  res.status(500).json({success: false, message: "Error interno", error: err });
}
};
export const updatePT = async (req, res) => {//sin terminar
  try {
    const reqBody = req.body
    const id = req.params.id

    const updatedPT = await modelos.updatePT(id, reqBody);

    if(!(updatedPT.success) && updatedPT.error ){
      res.status(500).json(updatedPT);
    }else if (!updatedPT.success){
      res.status(500).json(updatedPT);
    }else{
      res.status(200).json(updatedPT);
    }
  } catch (err) {
    res.status(500).json({success: false, message: "Error interno", error: err });
  }
};
export const deletePP = async (req, res) => {//sin terminar
  try {
    const id = req.params

    const deletedPP = await modelos.deletePP(id);
    if(!(deletedPP.success) && deletedPP.error ){
      res.status(500).json(deletedPP);
    }else if (!deletedPP.success){
      res.status(500).json(deletedPP);
    }else{
      res.status(200).json(deletedPP);
    }
  } catch (err) {
    res.status(500).json({success: false, message: "Error interno", error: err });
  }
};
export const deletePT = async (req, res) => {//sin terminar
  try {
    const id = req.params.id

    const deletedPT = await modelos.deletePT(id);
    if(!(deletedPT.success) && deletedPT.error ){
      res.status(500).json(deletedPT);
    }else if (!deletedPT.success){
      res.status(500).json(deletedPT);
    }else{
      res.status(200).json(deletedPT);
    }
  } catch (err) {
    res.status(500).json({success: false, message: "Error interno", error: err });
  }
};
