import { z } from "zod";

export const schemaNewPP = z.object({
  fecha_analisis: z.string().transform((str) => new Date(str)),
  fecha_toma_muestra: z.string().transform((str) => new Date(str)),
  nombre_producto: z.enum([
    "bebida semi elaborada",
    "bebida pasteurizada",
    "corte de bebida lactea",
  ]),
  saborizacion: z.enum(["fresa", "melocotón", "mora", "kumis", ""]).optional(),
  tanque: z.enum([
    "Tanque 7",
    "Tanque 9",
    "Tanque 10",
    "Tanque 12",
    "alternativo",
  ]),
  tanque_alt: z.string().optional(),
  hora_toma_muestra: z.string(),
  lote: z.string(),
  responsable_analisis: z.number(),
  observaciones: z.string().optional(),
});
export function validarPPParcial(obj) {
  return schemaNewPP.partial().safeParse(obj);
}
export function validarNewPP(obj) {
  return schemaNewPP.safeParse(obj);
}
