import React, { useState } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { Button } from '../ui/button'
import { Country, Developer, EducationLevel, Experience, Framework, KnowledgeDB, Lenguaje, ProjectTime, TypeProject } from './steps'
import { MoveLeft, MoveRight } from 'lucide-react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  password: string
}

export const StepForm: React.FC = () => {
  const methods = useForm<FormData>()
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: 'País',
      description: 'Lorem ipsum dolor sit amet.',
      step: <Country key="country" />,
    },
    {
      title: 'Tipo de desarrollador',
      description: 'Lorem ipsum dolor sit amet.',
      step: <Developer key="developer" />,
    },
    {
      title: 'Lenguaje de programación',
      description: 'Lorem ipsum dolor sit amet.',
      step: <Lenguaje key="lenguaje" />,
    },
    {
      title: 'Nivel educativo',
      description: 'Lorem ipsum dolor sit amet.',
      step: <EducationLevel key="educationLevel" />,

    },
    {
      title: 'Experiencia laboral',
      description: 'Lorem ipsum dolor sit amet.',
      step: <Experience key="experience" />,

    },
    {
      title: 'Framework',
      description: 'Lorem ipsum dolor sit amet.',
      step: <Framework key="framework" />,
    },
    {
      title: 'Conocimiento en base de datos SQL',
      description: 'Lorem ipsum dolor sit amet.',
      step: <KnowledgeDB key="knowledgeDB" />,

    },
    {
      title: 'Tiempo de duración del proyecto',
      description: 'Lorem ipsum dolor sit amet.',
      step: <ProjectTime key="projectTime" />,

    },
    {
      title: 'Tipo de proyecto',
      description: 'Lorem ipsum dolor sit amet.',
      step: <TypeProject key="typeProject" />,
    }
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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='grid grid-rows-12 h-full'>
        <div className='border-b border-slate-300 row-span-2 px-4 flex items-center gap-x-4'>
          <div className='ring-4 ring-primary p-2 rounded-full aspect-square flex justify-center items-center'>
            <p>{steps.indexOf(steps[currentStep]) + 1} / {steps.length}</p>
          </div>
          <div>
            <p className='font-semibold text-xl'>{steps[currentStep].title}</p>
            <p>{steps[currentStep].description}</p>
          </div>
        </div>
        <div className="row-span-8 place-content-center mx-auto">
          {steps[currentStep].step}
        </div>
        <div className='border-t border-slate-300 row-span-2 px-4'>
          <div className="grid grid-cols-2 h-full">
            <div className='place-content-center'>
              {currentStep > 0 && <Button size='lg' variant='secondary' onClick={prevStep}>
                <MoveLeft className="mr-2 h-4 w-4" /> Atrás
              </Button>}
            </div>
            <div className='flex justify-end items-center'>
              <Button type="submit" size="lg">
                {currentStep === steps.length - 1 ? 'Submit' : 'Siguiente'}
                <MoveRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
