import {z} from 'zod';

export const schemaLogin = z.object({
  dni: z.number(),
  contraseña: z.string()
 
})


export function validarLogin(obj) {
    return schemaLogin.safeParse(obj)
};