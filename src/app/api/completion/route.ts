import { generateObject } from 'ai'
import { openai, createOpenAI } from '@ai-sdk/openai'
import { z } from 'zod'

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json()

  const groq = createOpenAI({
    baseURL: 'https://api.groq.com/openai/v1',
    apiKey: process.env.GROQ_API_KEY,
  })

  try {

    const { object } = await generateObject({
      model: groq('llama3-8b-8192'),
      system: 'has un análisis del mercado de desarrollo web y genera los siguientes datos del salario de un programador según su experiencia y nivel educativo y el proyecto a realizar. salario minimo, promedio y maximo, genera la moneda segun el pais del desarrollador, 5 recomendaciones para que tome en cuenta cuanto deberia cobrar, 5 recomendaciones de que factores deberia tomar en cuenta para calcular el monto a cobrar, recomienda de 1 a 2 paginas web con nombre y url que traten sobre salario dependiendo del pais',
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
        calcular: z.array(z.string()),
        paginas: z.array(z.object({
          nombre: z.string(),
          url: z.string()
        }))
      }),
    })

    return Response.json({ object })
  } catch (error) {
    return Response.json(error)
  }
}
