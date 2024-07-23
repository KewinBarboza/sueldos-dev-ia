import { useState } from 'react'

export function useFormStep(initialFormSteps: number) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [formSteps, setFormSteps] = useState(initialFormSteps)

  const goBackwards = () => {
    if (currentIndex === 0) return
    setCurrentIndex((prev) => prev - 1)
  }

  const goForwards = () => {
    if (currentIndex === formSteps - 1) return
    setCurrentIndex((prev) => prev + 1)
  }

  // go to section
  const goToSection = (item: number) => {
    setCurrentIndex(item)
  }

  // update form steps
  const updateFormSteps = (newFormSteps: number) => {
    setFormSteps(newFormSteps)
  }

  return {
    currentIndex,
    goForwards,
    goBackwards,
    goToSection,
    updateFormSteps,
    isFirstStep: currentIndex === 0,
    isLastStep: currentIndex === formSteps - 2,
    isConfirmation: currentIndex === formSteps - 1
  }
}
