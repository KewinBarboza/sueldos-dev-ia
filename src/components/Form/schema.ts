import { z } from "zod"

export const formSchema = z.object({
  pais: z.string().min(2).max(50),
  lenguaje: z.array(z.string()).min(1),
  desarrollador: z.array(z.string()).min(1),
  experiencia: z.string().min(2).max(50),
  conocimiento_bd: z.string().min(2).max(50),
  nivel_educativo: z.string().min(2).max(50),
  framework: z.array(z.string()).min(1),
  tiempo: z.string().min(2).max(50),
  tipo_proyecto: z.string().min(2).max(50),
})
