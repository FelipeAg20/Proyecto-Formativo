import { modelos } from "../model/model.js";

export const getAllPP = async (req, res) => {//TERMINADA
  //Controlador productos terminado
  try {
    const allPP = await modelos.getAllPP();
    res.status(200).json(allPP);
  } catch (err) {
    res.status(500).json({ message: "Error ", error: err });
  }
};
export const getAllPT = async (req, res) => {//TERMINADA
  //Controlador productos terminado
  try {
    const allPT = await modelos.getAllPT();
    res.status(200).json(allPT);
  } catch (err) {
    res.status(500).json({ message: "Error ", error: err });
  }
};
export const getAllR = async (req, res) => {//TERMINADA
  //Controlador Resultados
  try {
    const allR = await modelos.getAllR();
    res.status(200).json(allR);
  } catch (err) {
    res.status(500).json({ message: "Error ", error: err });
  }
};
export const getDatePP = async (req, res) => {//sin terminar
  //Controlador productos terminados por fecha
  try {
    const resultDate = await modelos.getOneWorkout(req.params.workoutId);
    res.status(200).json(resultDate);
  } catch (err) {
    res.status(500).json({ message: "Error fetching workout", error: err });
  }
};
export const createNewPP = async (req, res) => {//TERMINADA
  try {
    const reqBody = req.body;
    const newPP = await modelos.createNewPP(reqBody);
    
    if (!newPP) {
      return res.status(400).json({ message: "No se pudo crear el producto en proceso" });
  }

  res
    .status(201)
    .json({ message: "Producto en proceso creado con éxito", result: newPP });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error al conectarse con el servidor", error: err });
  }
};
export const createNewPT = async (req, res) => {//TERMINADA
  try {
    const reqBody = req.body;
    const newPT = await modelos.createNewPT(reqBody);
    if (!newPT) {
      return res.status(400).json({ message: "No se pudo crear el producto terminado" });
  }

  res
    .status(201)
    .json({ message: "Producto terminado creado con éxito", result: newPT });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error al crear el producto terminado", error: err });
  }
};
export const createNewR = async (req, res) => {//TERMINADA
  try {
    const reqBody = req.body;
    const newR = await modelos.createNewR(reqBody);
    if (!newR) {
      return res.status(400).json({ message: "No se pudo crear el resultado" });
  }

  res
    .status(201)
    .json({ message: "Resultado creado con éxito", result: newR });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error al crear el resultado", error: err });
  }
};
export const updatePP = async (req, res) => {//sin terminar
  try {
    const reqBody = req.body
    const id = req.params.id

    const updatedPP = await modelos.updatePP(id, reqBody);

    if (updatedPP.message) {
      res.status(200).json({ message: "Producto en proceso actualizado con éxito", result: updatedPP });
    } else {
    res.status(404).json(updatedPP); // En caso de que no se encuentre el producto
  }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const updatePT = async (req, res) => {//sin terminar
  try {
    const reqBody = req.body
    const id = req.params.id

    const updatedPT = await modelos.updatePT(id, reqBody);

    res.status(200).json({ message: "Producto terminado actualizado con éxito", result: updatedPT });

  } catch (err) {
    res.status(500).json({ message: "Error al actualizar el producto terminado", error: err });
  }
};
export const deletePP = async (req, res) => {//sin terminar
  try {
    const id = req.params

    const deletedPP = await modelos.deletePP(id);

    res.status(200).json({ message: "Producto en proceso eliminado con éxito", result: deletedPP });

  } catch (err) {
    res.status(500).json({ message: "Error al eliminar el producto en proceso", error: err });
  }
};
export const deletePT = async (req, res) => {//sin terminar
  try {
    const id = req.params.id

    const deletedPT = await modelos.deletePT(id);

    res.status(200).json({ message: "Producto terminado eliminado con éxito", result: deletedPT });

  } catch (err) {
    res.status(500).json({ message: "Error al eliminar el producto terminado", error: err });
  }
};
