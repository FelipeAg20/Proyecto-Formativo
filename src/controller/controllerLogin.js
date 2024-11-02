
import { validarLogin } from "../schemas/login.js";
import { generateToken  } from "../helpers/generateToken.js";
import { serviceUser } from "../services/servicesU.js";
// import cookieParser from 'cookie-parser';
// app.use(cookieParser());

export let login = async (req, res) => {
  console.log(req.body);
   req.body
  const result = validarLogin(req.body);
  
  if (result.error) {
    return res.status(401).json({ success: false, message: "Error de validacion", error: result.error});
  } else {
    let { dni, pass } = req.body;
    let usuario = {
      dni: dni,
      pass: pass,
    };
    const result = await serviceUser.login(usuario);
    if (result.success) {
      const resultToken = generateToken({ id: result.id }, process.env.TOKEN);
      
      return res
        .status(200)
        .json({ success: true, message: "Login exitoso", result: resultToken})
         .cookie('tokenAcc',resultToken,{httpOnly:true,sameSite:'strict',maxAge:18000}) //que es esto?

         
    } else {
      return res
        .status(401)
        .json({ success: false, message: "El Dni o la contraseña es invalida"});
    }
  }
};