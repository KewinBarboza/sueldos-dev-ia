import { z } from "zod"

export const salarySchema = z.object({
  salario: z.array(
    z.object({
      minimo: z.number().describe('salario minimo'),
      promedio: z.number().describe('salario promedio'),
      maximo: z.number().describe('salario máximo'),
    }),
  ),
  moneda: z.string(),
  recomendaciones: z.array(z.string()),
  calcular: z.array(z.string()),
  paginas: z.array(z.object({
    nombre: z.string(),
    url: z.string()
  }))
})

export type SalarySchemaType = z.infer<typeof salarySchema> | undefined
