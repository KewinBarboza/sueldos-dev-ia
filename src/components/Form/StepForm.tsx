import React, { useState } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { Button } from '../ui/button'
import { Country, Developer, EducationLevel, Experience, Framework, KnowledgeDB, Lenguaje, ProjectTime, TypeProject } from './steps'

interface FormData {
  firstName: string
  lastName: string
  email: string
  password: string
}

export const StepForm: React.FC = () => {
  const methods = useForm<FormData>()
  const [currentStep, setCurrentStep] = useState(0)
  const [startForm, setStartForm] = useState(false)

  const steps = [
    <Country key="country" />,
    <Developer key="developer" />,
    <Lenguaje key="lenguaje" />,
    <EducationLevel key="educationLevel" />,
    <Experience key="experience" />,
    <Framework key="framework" />,
    <KnowledgeDB key="knowledgeDB" />,
    <ProjectTime key="projectTime" />,
    <TypeProject key="typeProject" />,
  ]

  const nextStep = () => setCurrentStep((prev) => prev + 1)
  const prevStep = () => setCurrentStep((prev) => prev - 1)

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (currentStep === steps.length - 1) {
      // Final submission logic here
      console.log('Form Submitted', data)
    } else {
      nextStep()
    }
  }

  return (
    <>
      {
        startForm === false ? (
          <Button onClick={() => setStartForm(true)}>Empezar</Button>
        ) : (
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="grid gap-3 mb-6">
                {steps[currentStep]}
              </div>
              <div>
                {currentStep > 0 && <Button onClick={prevStep}>Back</Button>}
                <Button type="submit">
                  {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </div>
            </form>
          </FormProvider>
        )
      }
    </>
  )
}
