import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useFormStep } from './useFormStep'
import { prompt } from '@/lib/utils'

export function useFormState({ formSchema, defaultValues }) {
  const [generation, setGeneration] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const { goBackwards, goForwards, currentIndex, isFirstStep, isLastStep } = useFormStep(10)


  const form = useForm()

  // const form = useForm<z.infer<typeof formSchema>>({
  //   defaultValues,
  //   resolver: zodResolver(formSchema),
  // })

  async function onSubmit(values) {
    console.log(values)
    // if (isLastStep) {
    //   // Final submission logic here
    //   console.log('Form Submitted', data)
    // } else {
    //   goForwards()
    // }

    if (!isLastStep) return goForwards()

    try {
      setIsLoading(true)
      const result = await fetch('/api/completion', {
        method: 'POST',
        body: JSON.stringify({ prompt: prompt(values) }),
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
