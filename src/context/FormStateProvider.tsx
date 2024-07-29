import { FormStateContext as FormStateContextType } from "@/types/FormStateContext"
import { FormStateContext } from "./FormStateContext"
import { useState } from "react"
import { useFormStep } from "@/hook/useFormStep"
import { formSchema, FormSchema } from "@/types/formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { prompt } from '@/lib/utils'
import { SalarySchemaType } from "@/types/salarySchema"

export const FormStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [isError, setIsError] = useState(null)
  const [generation, setGeneration] = useState<SalarySchemaType>()
  const [isLoading, setIsLoading] = useState(false)
  const { goBackwards, goForwards, currentIndex, isFirstStep, isLastStep } = useFormStep(10)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema[currentIndex])
  })

  const onSubmit: SubmitHandler<FormSchema> = async (values) => {
    if (!isLastStep) return goForwards()

    try {
      setIsLoading(true)
      const result = await fetch('/api/completion', {
        method: 'POST',
        body: JSON.stringify({ prompt: prompt(form.getValues()) }),
      })

      if (!result.ok) throw new Error('Ah ocurrido un error de comunicación')

      const response = await result.json()
      setGeneration(response.object)
    } catch (error) {
      console.log(error)
      setIsError(error)
      throw new Error('Ah ocurrido un error de comunicación')
    } finally {
      setIsLoading(false)
    }
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
  }

  return (
    <FormStateContext.Provider value={value}>
      {children}
    </FormStateContext.Provider>
  )
}
