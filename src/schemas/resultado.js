import {z} from 'zod';

export const schemaNewR = z.object({
    
    fecha_registro: z.string().transform((str) => new Date(str)),
    Coliformes: z.string(),
    E_coli: z.string(),
    Mohos_levaduras: z.string(),
    observaciones: z.string().optional(),
    id_producto_proceso: z.string(),
    id_producto_terminado: z.string()

})
export function validarNewR(obj) {
    return schemaNewR.safeParse(obj)
};
