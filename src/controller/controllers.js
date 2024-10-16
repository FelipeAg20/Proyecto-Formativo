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

export const updatePP = async (req, res) => {
  try {
    const reqBody = req.body
    const id = req.params.id

    const updatedPP = await modelos.updatePP(id, reqBody);
    
      res.status(200).json({ message: "Producto en proceso actualizado con éxito", result: updatedPP });
    
  } catch (err) {
    res.status(500).json({ message: "Error al actualizar el producto en proceso", error: err });
  }
};

export const updatePT = async (req, res) => {
  try {
    const reqBody = req.body
    const id = req.params.id

    const updatedPT = await modelos.updatePT(id, reqBody);

    res.status(200).json({ message: "Producto terminado actualizado con éxito", result: updatedPT });

  } catch (err) {
    res.status(500).json({ message: "Error al actualizar el producto terminado", error: err });
  }
};

export const deletePP = async (req, res) => {
  try {
    const id = req.params.id

    const deletedPP = await modelos.deletePP(id);

    res.status(200).json({ message: "Producto en proceso eliminado con éxito", result: deletedPP });

  } catch (err) {
    res.status(500).json({ message: "Error al eliminar el producto en proceso", error: err });
  }
};

export const deletePT = async (req, res) => {
  try {
    const id = req.params.id

    const deletedPT = await modelos.deletePT(id);

    res.status(200).json({ message: "Producto terminado eliminado con éxito", result: deletedPT });

  } catch (err) {
    res.status(500).json({ message: "Error al eliminar el producto terminado", error: err });
  }
};
