import {z} from 'zod';

export const schemaLogin = z.object({
  dni: z.string().max(12).min(7),
  contraseña: z.string()
})


export function validarLogin(obj) {
    return schemaLogin.partial().safeParse(obj)
};