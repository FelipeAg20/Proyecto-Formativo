import { validarRegister } from "../schemas/register.js";
import { serviceUser } from "../services/servicesU.js";
import { sendEmail } from "../helpers/sendEmail.js";

export let register = async (req, res) => {
    const result = validarRegister(req.body)
    if (result.error){
        res.status(422).json({ error: result.error});
         console.log(result.error)
    }else{
        
        let nuevoR = req.body
        await sendEmail({
            email: nuevoR.email,
            dni: nuevoR.dni,
            contraseña: nuevoR.contraseña
        });

        const nuevo = await serviceUser.hashRegister(nuevoR)
        
        res.status(200).json({ success: true, messaje:'Creado con exito',dni:nuevoR.dni})
    }

};