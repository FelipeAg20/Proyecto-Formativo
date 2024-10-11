import { modelos } from "../model/model.js";

export const getAllPP = async (req, res) => {
  //Controlador productos terminado
  try {
    const allPP = await modelos.getAllPP();
    res.status(200).json(allPP);
  } catch (err) {
    res.status(500).json({ message: "Error ", error: err });
  }
};
export const getAllPT = async (req, res) => {
  //Controlador productos terminado
  try {
    const allPT = await modelos.getAllPT();
    res.status(200).json(allPT);
  } catch (err) {
    res.status(500).json({ message: "Error ", error: err });
  }
};
export const getAllR = async (req, res) => {
  //Controlador Resultados
  try {
    const allR = await modelos.getAllR();
    res.status(200).json(allR);
  } catch (err) {
    res.status(500).json({ message: "Error ", error: err });
  }
};
export const getDatePP = async (req, res) => {
  //Controlador productos terminados por fecha
  try {
    const resultDate = await modelos.getOneWorkout(req.params.workoutId);
    res.status(200).json(resultDate);
  } catch (err) {
    res.status(500).json({ message: "Error fetching workout", error: err });
  }
};
export const createNewPP = async (req, res) => {
  try {
    const reqBody = req.body;
    const newPP = await modelos.createNewPP(reqBody);
    res
      .status(201)
      .json({ message: "Producto en proceso creado con exito", result: newPP });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error al crear el procucto en proceso", error: err });
  }
};
export const createNewPT = async (req, res) => {
  try {
    const reqBody = req.body;
    const newPT = await modelos.createNewPP(reqBody);
    res
      .status(201)
      .json({ message: "Producto Terminado creado con exito", result: newPT });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error al crear el producto terminado", error: err });
  }
};
