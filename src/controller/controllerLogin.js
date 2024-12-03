
import { validarLogin } from "../schemas/login.js";
import { generateToken  } from "../helpers/generateToken.js";
import { serviceUser } from "../services/servicesU.js";
// import cookieParser from 'cookie-parser';
// app.use(cookieParser());

export let login = async (req, res) => {
  console.log(req.body);
   
  let result = validarLogin(req.body);
  
  if (result.error) {
    return res.status(400).json({ success: false, message: "Error de validacion", error: result.error});
  } else {
    let { dni, contraseña } = req.body;
    let usuario = {
      dni: dni,
      contraseña: contraseña,
    };
    const result = await serviceUser.login(usuario);
    console.log(result.rol);
    
    if (result.success) {
      let resultToken = "";
      if(result.rol == "analista"){
        resultToken = generateToken({ id: result.id }, process.env.KEY_ANALISTA);
        
      }else{
        resultToken = generateToken({ id: result.id }, process.env.KEY_ADMINISTRADOR);
      }

      return res
        .status(200)
        .json({ success: true, message: "Inicio de sesion exitoso", result: resultToken,rol:result.rol})
        
    } else {
      return res
        .status(401)
        .json({ success: false, message: "El Dni o la contraseña es invalida"});
    }
  }
};