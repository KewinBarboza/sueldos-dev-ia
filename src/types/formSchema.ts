import { z } from "zod"

const country = z.object({
  pais: z.string().min(2, 'Seleccione un país para continuar').max(50),
})

const developer = z.object({
  desarrollador: z.array(z.string()).min(1, 'El tipo de desarrollador es requerido para continuar'),
})

const lenguaje = z.object({
  lenguaje: z.array(z.string()).min(1, 'Seleccione al menos un lenguajes para continuar'),
})

const educationLevel = z.object({
  nivel_educativo: z.string().min(2, 'El nivel educativo es requerido para poder continuar').max(50),
})

const experience = z.object({
  experiencia: z.string().min(2, 'La experiencia laboral es requerida').max(50),
})

const framework = z.object({
  framework: z.array(z.string()).min(1, 'Seleccione al menos un framework para continuar'),
})

const knowledgeDB = z.object({
  conocimiento_bd: z.string().min(2, 'Seleccione su nivel en Base de datos para poder continuar').max(50),
})

const projectTime = z.object({
  tiempo: z.string().min(2, 'Seleccione la duración del proyecto para continuar').max(50),
})

const typeProject = z.object({
  tipo_proyecto: z.string().min(2, 'Debe seleccionar el tipo de proyecto para poder continuar').max(50),
})

const combinedSchema = z.object({
  ...country.shape,
  ...developer.shape,
  ...lenguaje.shape,
  ...educationLevel.shape,
  ...experience.shape,
  ...framework.shape,
  ...knowledgeDB.shape,
  ...projectTime.shape,
  ...typeProject.shape,
})

export type FormSchema = z.infer<typeof combinedSchema>

export const formSchema = [
  country,
  developer,
  lenguaje,
  educationLevel,
  experience,
  framework,
  knowledgeDB,
  projectTime,
  typeProject,
]
