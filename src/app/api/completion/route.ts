import { generateObject } from 'ai'
import { google } from '@ai-sdk/google'
import { salarySchema } from '@/types/salarySchema'

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json()

  if (!prompt) {
    return Response.json(
      {
        error: "Ingrese los datos del formulario para continuar",
        status: 400
      }
    )
  }

  try {
    const { object } = await generateObject({
      model: google('models/gemini-1.5-flash-latest'),
      system: 'Quiero que realices un análisis exhaustivo del mercado de desarrollo web para calcular y recomendar aspectos del salario de un programador. según su experiencia y nivel educativo y el proyecto a realizar. Calcula salario minimo esperado para un programador con experiencia y nivel educativo especificado. Proporciona el salario promedio en el mercado para el mismo perfil. Indica el salario máximo que un programador puede alcanzar en este mercado. Especifica la moneda según el país del desarrollador. Proporciona 5 recomendaciones para que el programador determine cuánto debería cobrar por sus servicios. Considera factores como habilidades, experiencia, industria, y tipo de proyecto. Ofrece 5 recomendaciones sobre los factores clave que un programador debe tomar en cuenta al calcular el monto a cobrar. Incluye aspectos como complejidad del proyecto, duración, y demandas del cliente. recomienda de 1 a 2 páginas web con nombre y URL que brinden información sobre salarios para programadores dependiendo del país, asegurando que sean recursos confiables y actualizados.',
      prompt,
      temperature: 0.3,
      schema: salarySchema
    })

    return Response.json({ object })
  } catch (error) {
    console.log('❌', error)
    throw new Error(JSON.stringify({
      error: "Ah ocurrido un error intente de nuevo.",
      status: 500
    }))
  }
}
