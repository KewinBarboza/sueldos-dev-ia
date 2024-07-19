"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"

import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Share, Triangle } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ToggleSelector } from "@/components/ToggleSelector"

const formSchema = z.object({
  pais: z.string().min(2).max(50),
  lenguaje: z.array(z.string()).min(1),
  desarrollador: z.array(z.string()).min(1),
  experiencia: z.string().min(2).max(50),
  conocimiento_bd: z.string().min(2).max(50),
  nivel_educativo: z.string().min(2).max(50),
  framework: z.array(z.string()).min(1),
  tiempo: z.string().min(2).max(50),
  tipo_proyecto: z.string().min(2).max(50),
})

export default function Home() {
  const [generation, setGeneration] = useState()
  const [isLoading, setIsLoading] = useState(false)


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pais: "",
      lenguaje: [],
      desarrollador: [],
      experiencia: "",
      conocimiento_bd: "",
      nivel_educativo: "",
      framework: [],
      tiempo: "",
      tipo_proyecto: ''
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {

    try {
      setIsLoading(true)
      const result = await fetch('/api/completion', {
        method: 'POST',
        body: JSON.stringify({
          prompt: `Soy un desarrollador ${values.experiencia} de ${values.pais} y voy a trabajar en un proyecto para la
creación de ${values.tipo_proyecto} el tiempo seria ${values.tiempo} con el lenguajes ${values.lenguaje.join(',')} y con
el framework ${values.framework.join(',')} mi nivel educativo es ${values.nivel_educativo} soy un desarrollador ${values.desarrollador} y mis conocimiento
sobre base de datos son de nivel ${values.conocimiento_bd} cuando debería cobrar`,
        }),
      })

      if (!result.ok) {
        //TODO: add component error
        return
      }

      const response = await result.json()
      console.log(response)
      setGeneration(response.object)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (

    <div className="grid h-screen w-full">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
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
        <main className="grid flex-1 gap-4 overflow-auto md:grid-cols-2 lg:grid-cols-3">
          <div className="relative hidden flex-col items-start gap-8 border-r md:flex">
            <Form {...form}>
              <form className="grid w-full items-start gap-6 overflow-auto pt-0" onSubmit={form.handleSubmit(onSubmit)}>
                <ScrollArea className="h-[85vh] w-full px-10">
                  <div className="grid gap-3 mt-4 mb-6">
                    <FormField
                      control={form.control}
                      name="pais"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold">País</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <SelectTrigger
                                id="model"
                                className="items-start [&_[data-description]]:hidden"
                              >
                                <SelectValue placeholder="Select a model" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="España">
                                  España
                                </SelectItem>
                                <SelectItem value="Colombia">
                                  Colombia
                                </SelectItem>
                                <SelectItem value="Venezuela">
                                  Venezuela
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormDescription>
                            This is your public display name.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-3 mb-6">
                    <ToggleSelector control={form.control} description='lenguaje de programación' label='Lenguaje' name='lenguaje' type="multiple">
                      <ToggleGroupItem value="JavaScript" aria-label="Toggle bold">
                        JavaScript
                      </ToggleGroupItem>
                      <ToggleGroupItem value="PHP" aria-label="Toggle italic">
                        PHP
                      </ToggleGroupItem>
                      <ToggleGroupItem value="Python" aria-label="Toggle underline">
                        Python
                      </ToggleGroupItem>
                    </ToggleSelector>
                  </div>

                  <div className="grid gap-3 mb-6">
                    <ToggleSelector control={form.control} description='Seleccione el tipo de desarrollador' label='Desarrollador' name='desarrollador' type="multiple">
                      <ToggleGroupItem value="BackEnd" aria-label="Toggle bold">
                        BackEnd
                      </ToggleGroupItem>
                      <ToggleGroupItem value="FrontEnd" aria-label="Toggle italic">
                        FrontEnd
                      </ToggleGroupItem>
                    </ToggleSelector>
                  </div>

                  <div className="grid gap-3 mb-6">
                    <ToggleSelector control={form.control} description='Años de experiencia laboral' label='Años de experiencia' name='experiencia' type="single">
                      <ToggleGroupItem value="junior" aria-label="Toggle bold">
                        Junior 1 -3  años de experiencia
                      </ToggleGroupItem>
                      <ToggleGroupItem value="mid" aria-label="Toggle italic">
                        Mid 4-9  años de experiencia
                      </ToggleGroupItem>
                      <ToggleGroupItem value="Senior" aria-label="Toggle italic">
                        Senior de 10-20 años de experiencia
                      </ToggleGroupItem>
                    </ToggleSelector>
                  </div>

                  <div className="grid gap-3 mb-6">
                    <ToggleSelector control={form.control} description='Selecciona el nivel de conocimiento de Base de datos' label='Nivel de manejo de base de datos' name='conocimiento_bd' type="single">
                      <ToggleGroupItem value="bajo" aria-label="Toggle bold">
                        Bajo
                      </ToggleGroupItem>
                      <ToggleGroupItem value="medio" aria-label="Toggle italic">
                        Medio
                      </ToggleGroupItem>
                      <ToggleGroupItem value="alto" aria-label="Toggle italic">
                        Alto
                      </ToggleGroupItem>
                    </ToggleSelector>
                  </div>

                  <div className="grid gap-3 mb-6">
                    <ToggleSelector control={form.control} description='como aprendiste a programar' label='Nivel educativo' name='nivel_educativo' type="single">
                      <ToggleGroupItem value="Bootcamp" aria-label="Toggle bold">
                        Bootcamp
                      </ToggleGroupItem>
                      <ToggleGroupItem value="Ingeniería" aria-label="Toggle italic">
                        Ingeniería
                      </ToggleGroupItem>
                      <ToggleGroupItem value="Autodidacta" aria-label="Toggle italic">
                        Autodidacta
                      </ToggleGroupItem>
                    </ToggleSelector>
                  </div>

                  <div className="grid gap-3 mb-6">
                    <ToggleSelector control={form.control} description='Framework con el cuales vas a trabajar o hacer el proyecto' label='Framework' name='framework' type="multiple">
                      <ToggleGroupItem value="React" aria-label="Toggle bold">
                        React
                      </ToggleGroupItem>
                      <ToggleGroupItem value="Svelte" aria-label="Toggle italic">
                        Svelte
                      </ToggleGroupItem>
                      <ToggleGroupItem value="Vue" aria-label="Toggle italic">
                        Vue
                      </ToggleGroupItem>
                      <ToggleGroupItem value="Angular" aria-label="Toggle italic">
                        Angular
                      </ToggleGroupItem>
                    </ToggleSelector>
                  </div>

                  <div className="grid gap-3 mb-6">
                    <ToggleSelector control={form.control} description='EL tiempo por el cual vas a estar trabajador con el proyecto' label='Tiempo del proyecto' name='tiempo' type="single">
                      <ToggleGroupItem value="1 a 2 semenas" aria-label="Toggle bold">
                        1 a 2 semanas
                      </ToggleGroupItem>
                      <ToggleGroupItem value="3 a 7 semenas" aria-label="Toggle bold">
                        3 a 7 semanas
                      </ToggleGroupItem>
                      <ToggleGroupItem value="8 a 12 semanas" aria-label="Toggle italic">
                        8 a 12 semanas
                      </ToggleGroupItem>
                      <ToggleGroupItem value="mas de 12 semanas" aria-label="Toggle italic">
                        Mas de 12 semanas
                      </ToggleGroupItem>
                      <ToggleGroupItem value="trabajo fijo" aria-label="Toggle italic">
                        Trabajo fijo
                      </ToggleGroupItem>
                    </ToggleSelector>
                  </div>

                  <div className="grid gap-3 mb-6">
                    <ToggleSelector control={form.control} description='Tipo de aplicativo por el cual vas a estar trabajando' label='Tipo de proyecto' name='tipo_proyecto' type="single">
                      <ToggleGroupItem value="App móvil" aria-label="Toggle bold">
                        App móvil
                      </ToggleGroupItem>
                      <ToggleGroupItem value="Landing page" aria-label="Toggle bold">
                        Landing page
                      </ToggleGroupItem>
                      <ToggleGroupItem value="Sistema web" aria-label="Toggle italic">
                        Sistema web
                      </ToggleGroupItem>
                      <ToggleGroupItem value="Videojuegos" aria-label="Toggle italic">
                        Videojuegos
                      </ToggleGroupItem>
                      <ToggleGroupItem value="Aplicación nativa de Windows/Mac " aria-label="Toggle italic">
                        Aplicación nativa de Windows/Mac
                      </ToggleGroupItem>
                    </ToggleSelector>
                  </div>
                </ScrollArea>
                <div className="border-t rounded-lg py-4 px-10">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </Form>
          </div>
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
      </div>
    </div>
  )
}
