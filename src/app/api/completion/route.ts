import { generateObject } from 'ai'
import { google } from '@ai-sdk/google'
import { z } from 'zod'

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json()

  const model = google('models/gemini-pro')
  const { object } = await generateObject({
    model,
    system: 'has un análisis del mercado de desarrollo web y genera los siguientes datos del salario de un programador según su experiencia y nivel educativo y el proyecto a realizar. salario minimo, promedio y maximo, genera la moneda segun el pais del desarrollador, 5 recomendaciones para que tome en cuenta cuanto deberia cobrar, busca de 3 a 5 paquetes de npm con su nombre y una breve descripcion del paquete segun el lenguaje, framework y el tipo de proyecto, recomienda de 1 a 2 paginas web con nombre y url que traten sobre salario dependiendo del pais',
    prompt,
    temperature: 0.3,
    schema: z.object({
      salario: z.array(
        z.object({
          minimo: z.number().describe('salario minimo'),
          promedio: z.number().describe('salario promedio'),
          maximo: z.number().describe('salario máximo'),
        }),
      ),
      moneda: z.string(),
      recomendaciones: z.array(z.string()),
      npm: z.array(
        z.object({
          nombre: z.string().describe('nombre de un paquete de npm con buena puntuación'),
          descripcion: z.string().describe('una breve descripcion del paquete')
        })
      ),
      paginas: z.array(z.object({
        nombre: z.string(),
        url: z.string()
      }))
    }),
  })

  return Response.json({ object })
}
