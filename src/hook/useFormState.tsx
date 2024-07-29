import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useFormStep } from './useFormStep'
import { prompt } from '@/lib/utils'
import { FormSchema, formSchema } from '@/types/formSchema'

export function useFormState() {
  const [generation, setGeneration] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const { goBackwards, goForwards, currentIndex, isFirstStep, isLastStep } = useFormStep(10)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema[currentIndex]),
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<FormSchema> = async (values) => {
    if (!isLastStep) return goForwards()

    try {
      setIsLoading(true)
      const result = await fetch('/api/completion', {
        method: 'POST',
        body: JSON.stringify({ prompt: prompt(form.getValues()) }),
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

  return {
    isLoading,
    generation,
    form,
    currentIndex,
    isFirstStep,
    isLastStep,
    onSubmit,
    goBackwards,
  }
}
