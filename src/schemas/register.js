import {z} from 'zod';

export const schemaRegister = z.object({
  dni: z.number(),
  nombre: z.string(),
  roll: z.enum(['administrador','analista']),
  contraseña :z.string()
  
})


export function validarRegister(obj) {
    return schemaRegister.safeParse(obj)
};