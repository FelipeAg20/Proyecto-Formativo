import {z} from 'zod';



const esquema = z.object({
    nombre: z.string({
        message: "Letras papa"
    }),
    director: z.string({
        message: "Letras papa"
    }),
    genero: z.string({
        message: "Letras papa"
    }),
    puntuacion: z.number().positive().default(5)
});

// const esquemaido = z.object({}

export function validacion(objValid) {
    return esquema.safeParse(objValid)
}

export function validacionParcial(objValid) {
    return esquema.partial().safeParse(objValid)
}