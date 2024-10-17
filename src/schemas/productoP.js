import {z} from 'zod';

export const schemaNewPP = z.object({
    fecha_analisis: z.date(),
    fecha_toma_muestra: z.date(),
    nombre_producto: z.enum(['bebida semi elaborada','bebida pasteurizada','corte de bebida lactea']),
    saborizacion: z.enum(['fresa', 'melocotón', 'mora', 'kumis', '']).optional(),
    tanque:  z.enum(['Tanque 7','Tanque 9','Tanque 10','Tanque 12', 'alternativo']),
    tanque_alt: z.string().optional(),
    hora_toma_muestra: z.string(),
    lote: z.string(),
    responsable_analisis: z.number(),
    observaciones: z.string().optional(),
})

/* 
CREATE TABLE producto_proceso(
	fecha_analisis DATE DEFAULT(CURRENT_DATE) NOT NULL,
    fecha_toma_muestra DATE NOT NULL,
    nombre_producto ENUM('bebida semi elaborada','bebida pasteurizada','corte de bebida lactea') NOT NULL,
    saborizacion ENUM('fresa', 'melocotón', 'mora', 'kumis', '') NULL,
	tanque ENUM('Tanque 7','Tanque 9','Tanque 10','Tanque 12', 'alternativo') NOT NULL,
    tanque_alt VARCHAR(20) NULL,
	hora_toma_muestra TIME NOT NULL,
	lote VARCHAR(100) NOT NULL,
	responsable_analisis INT NOT NULL,
    observaciones VARCHAR(255) NULL,
	id_producto_proceso VARCHAR(30) PRIMARY KEY, -- LoteSaborPresentación_id

    FOREIGN KEY (responsable_analisis) REFERENCES analista(id_analista)
);
*/