import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export async function validarRutaRegister(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(403).json({ error: "Acceso denegado, falta el token" });
  }

  const key = process.env.KEY_ADMINISTRADOR;
  try {
    const verificar = Jwt.verify(token, key);

    // req.body.id=verificar.id;
    next();
  } catch(err) {
    return res
      .status(403)
      .json({ error: "Acceso denegado, token invalido o expirado" });
  }
}
