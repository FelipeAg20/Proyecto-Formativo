
import { validarLogin } from "../schemas/login.js";
import { generateToken  } from "../helpers/generateToken.js";
import { serviceUser } from "../services/servicesU.js";
// import cookieParser from 'cookie-parser';
// app.use(cookieParser());

export let login = async (req, res) => {
  console.log(req.body);
   
  const result = validarLogin(req.body);
  
  if (result.error) {
    return res.status(401).json({ success: false, message: "Error de validacion", error: result.error});
  } else {
    let { dni, contraseña } = req.body;
    let usuario = {
      dni: dni,
      contraseña: contraseña,
    };
    const result = await serviceUser.login(usuario);
    if (result.success) {
      const resultToken = generateToken({ dni:usuario.dni }, process.env.KEY);
      
      return res
        .status(200)
        .json({ success: true, message: "Login exitoso", result: resultToken})
        
         
    } else {
      return res
        .status(401)
        .json({ success: false, message: "El Dni o la contraseña es invalida"});
    }
  }
};