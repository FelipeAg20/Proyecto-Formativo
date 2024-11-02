import { validarRegister } from "../schemas/register.js";
import { serviceUser } from "../services/servicesU.js";

export let register = async (req, res) => {
    console.log(req.body);
    const result = validarRegister(req.body)
    if (result.error){
        res.status(422).json({ error: result.error});
         console.log(result.error)
    }else{
        let nuevoR = req.body

        const nuevo = await serviceUser.hashRegister(nuevoR.pass)
        
        res.status(200).json({messaje:'Creado con exito',dni:nuevoR.dni})
    }

};