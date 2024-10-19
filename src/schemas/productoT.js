import {z} from 'zod';

export const schemaNewPT = z.object({
    fecha_analisis: z.string().transform((str) => new Date(str)),
    fecha_empaque: z.string().transform((str) => new Date(str)),
    hora_empaque: z.string(),
    referencia: z.string().optional(),
    presentacion: z.enum(['1000', '200']),
    maquina_envasadora: z.enum(['m1', 'm2', 'm3', 'm4']),
    lote: z.string(),
    responsable_analisis: z.number(),
    observaciones: z.string().optional()
})

/* 
CREATE TABLE producto_terminado(
    fecha_analisis DATE DEFAULT(CURRENT_DATE) NOT NULL,
	fecha_empaque DATE NOT NULL,
    hora_empaque TIME NOT NULL,
    referencia VARCHAR(30) NULL,
	presentacion ENUM('1000', '200') NOT NULL,
    maquina_envasadora ENUM('m1', 'm2', 'm3', 'm4') NOT NULL,
    lote VARCHAR(100) NOT NULL,
	id_producto_terminado VARCHAR(30) PRIMARY KEY, -- LoteSaborPresentación_id
    responsable_analisis INT NOT NULL,
    observaciones VARCHAR(255) NULL,
    
    FOREIGN KEY (responsable_analisis) REFERENCES analista(id_analista)
);
*/
export function validarNewPT(obj) {
    return schemaNewPT.safeParse(obj)
};