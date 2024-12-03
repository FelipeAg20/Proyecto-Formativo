import {z} from 'zod';

export const schemaNewPT = z.object({
    fecha_env: z.string().transform((str) => new Date(str)),
    fecha_vencimiento: z.string().transform((str) => new Date(str)),
    ref: z.string(),
    presentacion: z.enum(['1000', '200']),
    lote: z.string(),
    hora_empaque: z.string(),
    maquina_envasadora: z.enum(['m1', 'm2', 'm3', 'm4']),
    observaciones: z.string().optional(),
    responsable_analisis: z.number(),
    id_producto_proceso: z.number()
})

/* 
CREATE TABLE producto_terminado (
id INT PRIMARY KEY AUTO_INCREMENT,
fecha_env DATE DEFAULT (CURRENT_DATE),
fecha_vencimiento DATE,
ref VARCHAR(100),
presentacion ENUM('1000', '200'),
lote VARCHAR(100),
hora_empaque TIME,
maquina_envasadora ENUM('m1', 'm2', 'm3', 'm4'),
observaciones VARCHAR(255) NULL,
responsable_analisis INT,

id_producto_proceso INT,
FOREIGN KEY (responsable_analisis) REFERENCES usuarios(id)

FOREIGN KEY (id_producto_proceso) REFERENCES producto_proceso(id)
);
*/
export function validarNewPT(obj) {
    return schemaNewPT.safeParse(obj)
};