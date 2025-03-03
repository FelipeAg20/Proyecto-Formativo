import {z} from 'zod';

export const schemaNewR = z.object({
    fecha_24: z.string().transform((str) => new Date(str)),
    observaciones: z.string().optional(),
    responsable_analisis: z.number(),
    mohos_ley: z.string()

})
export function validarNewRUpdate(obj) {
    return schemaNewR.safeParse(obj)
};