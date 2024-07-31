import { useFormState } from '@/hook/useFormState'
import { getCountryCode } from '@/lib/utils'
import { Calculator, CircleCheckBig, Lightbulb, Link } from 'lucide-react'
import { ScrollArea } from './ui/scroll-area'

export function Salary() {
  const { generation } = useFormState()

  if (generation === undefined) return null

  const { minimo, promedio, maximo } = generation!.salario[0]
  const localeInfo = getCountryCode(generation!.moneda)
  const formatterCurrency = (code: string, currency: string, salary: number) => new Intl.NumberFormat(code, { style: "currency", currency }).format(salary)

  return (
    <ScrollArea className='overflow-auto min-h-[90dvh] max-h-[68dvh]'>
      {
        generation.moneda.length > 0 && (
          <div className="grid grid-cols-3">
            <div className="col-span-3 border-b border-slate-300 py-3 font-semibold text-xl text-center">Recomendación para de tu Salario</div>

            <div className="border-slate-300 py-4 text-center border-r border-b">
              <p className='text-2xl'>
                {
                  localeInfo
                    ? formatterCurrency(localeInfo.code, localeInfo.currency, minimo)
                    : minimo
                }
              </p>
              <span className="text-red-700">Mínimo</span>
            </div>

            <div className="border-slate-300 py-4 text-center border-r border-b">
              <p className='text-2xl'>
                {
                  localeInfo
                    ? formatterCurrency(localeInfo.code, localeInfo.currency, promedio)
                    : promedio
                }
              </p>
              <span className="text-yellow-700">Promedio</span>
            </div>

            <div className="border-slate-300 py-4 text-center border-b">
              <p className='text-2xl'>
                {
                  localeInfo
                    ? formatterCurrency(localeInfo.code, localeInfo.currency, maximo)
                    : maximo
                }
              </p>
              <span className="text-green-700">Máximo</span>
            </div>
          </div>
        )
      }

      {
        generation!.recomendaciones !== undefined ? <div>
          <div className="border-b border-slate-300 font-semibold py-3 text-xl text-center" >
            Recomendaciones a tener en cuenta
          </div>
          <div className="grid grid-cols-4">
            <div className="border-b border-slate-300 flex justify-center items-center">
              <Lightbulb className="size-20 text-slate-500 rotate-12" strokeWidth={0.75} />
            </div>
            <div className="col-span-3 border-b border-l border-slate-300 p-3">
              {generation!.recomendaciones.map((recomendacion, index) => (
                <p className="flex text-pretty gap-x-2 mb-4" key={index}>
                  <CircleCheckBig className="text-green-400 mt-1 min-h-5 min-w-5" />
                  {recomendacion}
                </p>
              ))}
            </div>
          </div>
        </div> : null
      }

      {
        generation!.calcular !== undefined ? <div>
          <div className="border-b border-slate-300 font-semibold py-3 text-xl text-center" >
            Recomendaciones para calcular tu salario
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-3 border-b border-r border-slate-300 p-3">
              {generation!.calcular.map((calc, index) => (
                <p className="flex text-pretty gap-x-2 mb-4" key={index}>
                  <CircleCheckBig className="text-green-400 mt-1 min-h-5 min-w-5" />
                  {calc}
                </p>
              ))}
            </div>
            <div className="border-b border-slate-300 flex justify-center items-center">
              <Calculator className="size-20 text-slate-500 rotate-12" strokeWidth={0.75} />
            </div>
          </div>
        </div> : null
      }

      {
        generation!.paginas ? <div>
          <div className="border-b border-slate-300 font-semibold py-3 text-xl text-center" >
            Paginas para consultar información de salario
          </div>
          <div className=" p-3">
            {generation!.paginas.map((page, index) => (
              <div className="flex gap-x-2 mb-5" key={index}>
                <Link className="text-gray-700 mt-1" />
                <a className="hover:text-blue-500" target="_blank" href={page.url}>
                  <div className="text-xl">{page.nombre}</div>
                  {page.url}
                </a>
              </div>
            ))}
          </div>
        </div> : null
      }
    </ScrollArea>
  )
}
