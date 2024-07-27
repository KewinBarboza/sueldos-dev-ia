import { FormSchema } from "@/types/formSchema"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const prompt = (values: FormSchema) => (`Soy un desarrollador ${values.experiencia} de ${values.pais} y voy a trabajar en un proyecto para la
  creación de ${values.tipo_proyecto} el tiempo seria ${values.tiempo} con el lenguajes ${values.lenguaje.join(',')} y con
  el framework ${values.framework.join(',')} mi nivel educativo es ${values.nivel_educativo} soy un desarrollador ${values.desarrollador} y mis conocimiento
  sobre base de datos son de nivel ${values.conocimiento_bd} cuando debería cobrar`)
