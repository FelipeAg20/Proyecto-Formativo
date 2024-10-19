import { validarNewPP, validarPPParcial } from "../schemas/productoP.js";
import { validarNewPT } from "../schemas/productoT.js";
import { validarNewR } from "../schemas/resultado.js";


export function pP(req, res, next) {
  try {
    const body = validarNewPP(req.body);
    if (body.error) {
      return res.status(422).json({
        message: "Uno de los parametos es invalido",
        error: body.error,
      });
    } else {
      next();
    }
  } catch (e) {
    console.log("Error en los parametros" + e.message);
    return res
      .status(500)
      .json({ message: "Error interno del servidor", error: e.message });
  }
}
export function pT(req, res, next) {
  try {
    const body = validarNewPT(req.body);
    if (body.error) {
      return res.status(422).json({
        message: "Uno de los parametos es invalido",
        error: body.error,
      });
    } else {
      next();
    }
  } catch (e) {
    console.log("Error en los parametros" + e.message);
    return res
      .status(500)
      .json({ message: "Error interno del servidor", error: e.message });
  }
}
export function r(req, res, next) {
  try {
    const body = validarNewR(req.body);
    if (body.error) {
      return res.status(422).json({
        message: "Uno de los parametos es invalido",
        error: body.error,
      });
    } else {
      next();
    }
  } catch (e) {
    console.log("Error en los parametros" + e.message);
    return res
      .status(500)
      .json({ message: "Error interno del servidor", error: e.message });
  }
}
export function parcialPP(req, res, next) {
  try {
    const body = validarPPParcial(req.body);
    if (body.error) {
      return res.status(422).json({
        message: "Uno de los parametos es invalido",
        error: body.error,
      });
    } else {
      next();
    }
  } catch (e) {
    console.log("Error en los parametros" + e.message);
    return res
      .status(500)
      .json({ message: "Error interno del servidor", error: e.message });
  }
}