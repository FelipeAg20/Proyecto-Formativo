import {z} from 'zod';

export const schemaRegister = z.object({
  dni: z.string(),
  nombre: z.string(),
  rol: z.enum(['administrador','analista']),
  contraseña :z.string()
  
})


export function validarRegister(obj) {
    return schemaRegister.safeParse(obj)
};