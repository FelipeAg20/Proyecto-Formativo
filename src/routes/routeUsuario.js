import { Router } from "express"
import { register } from "../controller/controllerRegister.js";
import { login } from "../controller/controllerLogin.js";
import { validarRegister } from "../schemas/register.js";
import { validarRutaRegister } from "../middleware/validacionRutaRegister.js";
export const routerUsuarios = Router()

routerUsuarios
  //RUTA PARA REGISTRARSE
  .post("/register",register)
  //RUTA PARA LOGIN 
  .post("/login",login)