import { z } from "zod"

const country = z.object({
  pais: z.string().min(2).max(50),
})

const lenguaje = z.object({
  lenguaje: z.array(z.string()).min(1),
})

const developer = z.object({
  desarrollador: z.array(z.string()).min(1),
})

const experience = z.object({
  experiencia: z.string().min(2).max(50),
})

const knowledgeDB = z.object({
  conocimiento_bd: z.string().min(2).max(50),
})

const educationLevel = z.object({
  nivel_educativo: z.string().min(2).max(50),
})

const framework = z.object({
  framework: z.array(z.string()).min(1),
})

const projectTime = z.object({
  tiempo: z.string().min(2).max(50),
})

const typeProject = z.object({
  tipo_proyecto: z.string().min(2).max(50),
})

export const validatationSchema = [
  country,
  lenguaje,
  developer,
  experience,
  knowledgeDB,
  educationLevel,
  framework,
  projectTime,
  typeProject,
]
