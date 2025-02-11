"use client"

import { FormStateProvider } from "@/context/FormStateProvider"
import { CalculateSalary } from "@/components/CalculateSalary"
import { Navbar } from "@/components/Navbar"

export default function Home() {
  return (
    <FormStateProvider>
      <div className="max-h-dvh w-full grid items-center">
        <div className="flex flex-col">
          <section className="flex justify-center w-full px-4 mx-auto sm:px-8 md:px-12">
            <div className="max-h-dvh" style={{ width: '100%', display: 'inherit', justifyContent: 'inherit', alignItems: 'inherit', containerType: 'inherit' }}>
              <div className="max-w-[1214px]  max-h-dvh flex flex-col items-center py-2 ">
                <Navbar />
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="hidden lg:flex flex-col justify-stretch">
                    <div className="grid grid-cols-12 h-full">
                      <div className="p-5 border-slate-300 border-r border-t border-l"></div>
                      <div className="p-5 border-slate-300 border-t"></div>
                      <div className="p-5 border-slate-300 border-t border-l border-dashed"></div>
                      <div className="p-5 border-slate-300 border-t"></div>
                      <div className="p-5 border-slate-300 border-t border-dashed"></div>
                      <div className="p-5 border-slate-300 border-t"></div>
                      <div className="p-5 border-slate-300 border-t border-l border-dashed"></div>
                      <div className="p-5 border-slate-300 border-t"></div>
                      <div className="p-5 border-slate-300 border-t border-l border-dashed"></div>
                      <div className="p-5 border-slate-300 border-t"></div>
                      <div className="p-5 border-slate-300 border-t"></div>
                      <div className="p-5 border-slate-300 border-t border-l"></div>
                    </div>
                    <div className="grid grid-cols-12 h-2/4">
                      <div className="p-5 border-slate-300 border-l border-r border-t col-span-1"></div>
                      <div className="p-1 border-slate-300 border-t col-span-10 flex items-center relative overflow-hidden h-full border dark:border-blue-600/15 border-neutral-600/15 backdrop-blur-3xl">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D5DEE7_0%,#E8EBF2_50%,#D5DEE7_100%)]"></span>
                        <div className="inline-flex h-full w-full items-center justify-center py-16 bg-[#E2E7ED] dark:bg-slate-900 gap-x-16 text-sm font-medium text-neutral-900 backdrop-blur-3xl rounded-xl dark:border-neutral-600/15 border-neutral-600/15">
                          <div className="p-x-2 py-10 text-4xl font-bold tracking-tight sm:text-5xl md:p-8 text-center">
                            Calcula tu sueldo con IA
                          </div>
                        </div>
                      </div>
                      <div className="p-5 border-slate-300 border-l border-t col-span-1"></div>
                    </div>
                    <div className="grid grid-cols-12 h-full">
                      <div className="p-5 border-slate-300 border-b border-t border-r border-l col-span-1"></div>
                      <div className="p-5 border-slate-300 border-b border-t border-dashed col-span-10 text-center text-pretty">
                        <div className="text-center max-w-2xl mx-auto text-base text-pretty px-5 tracking-tight text-zinc-500 sm:text-lg lg:text-xl">
                          Nuestra herramienta de IA te ayuda a determinar tu rango salarial objetivo, considerando factores como tu tecnología, ubicación y nivel de seniority. ¡Toma el control de tu carrera!
                        </div>
                      </div>
                      <div className="p-5 border-slate-300 border-l border-t border-b col-span-1"></div>
                    </div>
                  </div>
                  <div className="border border-slate-300">
                    <CalculateSalary />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </FormStateProvider>
  )
}
