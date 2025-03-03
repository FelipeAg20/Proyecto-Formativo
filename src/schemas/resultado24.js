import {z} from 'zod';

export const schemaNewR = z.object({
    fecha_24: z.string().transform((str) => new Date(str)),
    e_coli: z.string(),
    coliformes: z.string(),
    observaciones: z.string().optional(),
    cabina: z.enum(['C','NC']).optional(),
    medio_cultivo: z.enum(['C','NC']).optional(),
    responsable_analisis: z.number()
})
export function validarNewR(obj) {
    return schemaNewR.safeParse(obj)
};
