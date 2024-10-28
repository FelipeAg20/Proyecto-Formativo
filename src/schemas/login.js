import {z} from 'zod';

export const schemaLogin = z.object({
  dni: z.number().max(12).min(7)

})


export function validarLogin(obj) {
    return schemaLogin.partial().safeParse(obj)
};