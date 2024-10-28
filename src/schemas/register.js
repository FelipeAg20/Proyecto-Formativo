import {z} from 'zod';

export const schemaRegister = z.object({
  dni: z.number().max(12).min(7),
  nombres: z.string(),
  roll: z.enum(['Admin','analista'])
})


export function validarRegister(obj) {
    return schemaRegister.safeParse(obj)
};