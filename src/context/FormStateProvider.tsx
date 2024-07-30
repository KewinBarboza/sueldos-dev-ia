import { FormStateContext as FormStateContextType } from "@/types/FormStateContext"
import { FormStateContext } from "./FormStateContext"
import { useState } from "react"
import { useFormStep } from "@/hook/useFormStep"
import { formSchema, FormSchema } from "@/types/formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { prompt } from '@/lib/utils'
import { SalarySchemaType } from "@/types/salarySchema"
import { ResponseError } from "@/types/error"
import { toast } from "sonner"

export const FormStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [isError, setIsError] = useState<ResponseError | Error | null>(null)
  const [generation, setGeneration] = useState<SalarySchemaType | undefined>()
  const [isLoading, setIsLoading] = useState(false)
  const { goBackwards, goForwards, goToSection, currentIndex, isFirstStep, isLastStep } = useFormStep(10)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema[currentIndex])
  })

  const onSubmit: SubmitHandler<FormSchema> = async () => {
    if (!isLastStep) return goForwards()

    try {
      setIsLoading(true)
      const result = await fetch('/api/completion', {
        method: 'POST',
        body: JSON.stringify({ prompt: prompt(form.getValues()) }),
      })

      if (!result.ok) throw new Error(JSON.stringify({ error: 'Ah ocurrido un error de comunicación', status: result.status }))

      const response = await result.json()
      setGeneration(response.object)
    } catch (e) {
      console.log(e)
      setIsError({ error: (e as Error).message, status: 400 })
      toast.error('Ah ocurrido un error intente de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setGeneration(undefined)
    form.reset()
    goToSection(0)
  }

  const value: FormStateContextType = {
    isLoading,
    generation,
    form,
    currentIndex,
    isFirstStep,
    isLastStep,
    isError,
    onSubmit,
    goBackwards,
    resetForm
  }

  return (
    <FormStateContext.Provider value={value}>
      {children}
    </FormStateContext.Provider>
  )
}
