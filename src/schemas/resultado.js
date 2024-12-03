import {z} from 'zod';

export const schemaNewR = z.object({
    fecha_analisis: z.string().transform((str) => new Date(str)),
    e_coli: z.string(),
    coliformes: z.string(),
    mohos_ley: z.string(),
    observaciones: z.string().optional(),
    cabina: z.enum(['C','NC']),
    medio_cultivo: z.enum(['C','NC']),
    id_pp: z.number().optional(),
    id_pt: z.number().optional()
})
export function validarNewR(obj) {
    return schemaNewR.safeParse(obj)
};
