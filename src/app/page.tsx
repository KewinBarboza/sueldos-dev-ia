"use client"
import { Button } from "@/components/ui/button"
import { Share, Triangle } from "lucide-react"
import { StepForm } from "@/components/Form/StepForm"

export default function Home() {
  return (
    <div className="grid h-screen w-full">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 bg-transparent px-4">
          <Button variant="outline" size="icon" aria-label="Home">
            <Triangle className="size-5 fill-foreground" />
          </Button>
          <h1 className="text-xl font-semibold">Playground</h1>

          <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
          >
            <Share className="size-3.5" />
            Share
          </Button>
        </header>

        <section className="flex justify-center w-full h-full px-4 mx-auto my-3 md:my-12 sm:px-8 md:px-12">
          <div style={{ width: '100%', display: 'inherit', justifyContent: 'inherit', alignItems: 'inherit', containerType: 'inherit' }}>
            <div className="sm:border-x-0 max-w-[1414px] max-h-[80dvh]">
              <div className="grid grid-cols-2 h-full">
                <div className="flex flex-col justify-stretch">
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
                    <div className="p-5 border-slate-300 border-t col-span-10 flex items-center">
                      <div className="p-x-2 py-10 text-4xl font-bold tracking-tight sm:text-5xl md:p-8 text-center">
                        Calcula tu sueldo con IA
                      </div>
                    </div>
                    <div className="p-5 border-slate-300 border-l border-t col-span-1"></div>
                  </div>
                  <div className="grid grid-cols-12 h-full">
                    <div className="p-5 border-slate-300 border-b border-t border-r border-l col-span-1"></div>
                    <div className="p-5 border-slate-300 border-b border-t border-dashed col-span-10 text-center text-pretty">
                      <div className="text-center max-w-2xl mx-auto text-base tracking-tight text-zinc-500 sm:text-lg lg:text-xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, dolore? adipisicing elit. Sit, dolore?
                      </div>
                      <Button className="my-5">Empezar</Button>
                    </div>
                    <div className="p-5 border-slate-300 border-l border-t border-b col-span-1"></div>
                  </div>
                </div>
                <div className="border border-slate-300">
                  <StepForm />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/*
          <div className="relative flex h-full min-h-[50vh] flex-col  p-4 lg:col-span-2">
            <pre>
              <code>
                {JSON.stringify(form.getValues(), null, 2)}
              </code>
            </pre>
            <hr />
            {isLoading ? 'Loading...' : <pre>
              <code>{JSON.stringify(generation, null, 2)}</code>
            </pre>}
          </div>
        </main>

        */}

      </div>
    </div>
  )
}
