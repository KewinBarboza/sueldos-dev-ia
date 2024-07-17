"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"

import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"

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

  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Form {...form}>
          <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-3">
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
            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="lenguaje"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Lenguaje</FormLabel>
                    <FormControl >
                      <ToggleGroup onValueChange={field.onChange} defaultValue={field.value} size={"lg"} type="multiple" variant="outline" className="justify-start" >
                        <ToggleGroupItem value="JavaScript" aria-label="Toggle bold">
                          JavaScript
                        </ToggleGroupItem>
                        <ToggleGroupItem value="PHP" aria-label="Toggle italic">
                          PHP
                        </ToggleGroupItem>
                        <ToggleGroupItem value="Python" aria-label="Toggle underline">
                          Python
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="desarrollador"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Desarrollador</FormLabel>
                    <FormControl >
                      <ToggleGroup onValueChange={field.onChange} defaultValue={field.value} size={"lg"} type="multiple" variant="outline" className="justify-start" >
                        <ToggleGroupItem value="BackEnd" aria-label="Toggle bold">
                          BackEnd
                        </ToggleGroupItem>
                        <ToggleGroupItem value="FrontEnd" aria-label="Toggle italic">
                          FrontEnd
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="experiencia"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Años de experiencia</FormLabel>
                    <FormControl >
                      <ToggleGroup onValueChange={field.onChange} defaultValue={field.value} size={"lg"} type="single" variant="outline" className="justify-start" >
                        <ToggleGroupItem value="junior" aria-label="Toggle bold">
                          Junior 1 -3  años de experiencia
                        </ToggleGroupItem>
                        <ToggleGroupItem value="mid" aria-label="Toggle italic">
                          Mid 4-9  años de experiencia
                        </ToggleGroupItem>
                        <ToggleGroupItem value="Senior" aria-label="Toggle italic">
                          Senior de 10-20 años de experiencia
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="conocimiento_bd"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">NIvel de manejo de base de datos</FormLabel>
                    <FormControl >
                      <ToggleGroup onValueChange={field.onChange} defaultValue={field.value} size={"lg"} type="single" variant="outline" className="justify-start" >
                        <ToggleGroupItem value="bajo" aria-label="Toggle bold">
                          Bajo
                        </ToggleGroupItem>
                        <ToggleGroupItem value="medio" aria-label="Toggle italic">
                          Medio
                        </ToggleGroupItem>
                        <ToggleGroupItem value="alto" aria-label="Toggle italic">
                          Alto
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="nivel_educativo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Nivel educativo</FormLabel>
                    <FormControl >
                      <ToggleGroup onValueChange={field.onChange} defaultValue={field.value} size={"lg"} type="single" variant="outline" className="justify-start" >
                        <ToggleGroupItem value="Bootcamp" aria-label="Toggle bold">
                          Bootcamp
                        </ToggleGroupItem>
                        <ToggleGroupItem value="Ingeniería" aria-label="Toggle italic">
                          Ingeniería
                        </ToggleGroupItem>
                        <ToggleGroupItem value="Autodidacta" aria-label="Toggle italic">
                          Autodidacta
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="framework"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Framework</FormLabel>
                    <FormControl >
                      <ToggleGroup onValueChange={field.onChange} defaultValue={field.value} size={"lg"} type="multiple" variant="outline" className="justify-start" >
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
                      </ToggleGroup>
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="tiempo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Tiempo del proyecto</FormLabel>
                    <FormControl >
                      <ToggleGroup onValueChange={field.onChange} defaultValue={field.value} size={"lg"} type="single" variant="outline" className="justify-start" >
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
                          mas de 12 semanas
                        </ToggleGroupItem>
                        <ToggleGroupItem value="trabajo fijo" aria-label="Toggle italic">
                          trabajo fijo
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="tipo_proyecto"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Tipo de proyecto</FormLabel>
                    <FormControl >
                      <ToggleGroup onValueChange={field.onChange} defaultValue={field.value} size={"lg"} type="single" variant="outline" className="justify-start" >
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
                      </ToggleGroup>
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>

        <pre>
          <code>
            {JSON.stringify(form.getValues(), null, 2)}
          </code>
        </pre>
      </div>
    </main>
  )
}
