import React, { useState } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { Button } from '../ui/button'
import { Country, Developer, EducationLevel, Experience, Framework, KnowledgeDB, Lenguaje, ProjectTime, TypeProject } from './steps'
import { MoveLeft, MoveRight } from 'lucide-react'
import { ScrollArea } from '../ui/scroll-area'
import { useFormStep } from '@/hook/useFormStep'

interface FormData {
  firstName: string
  lastName: string
  email: string
  password: string
}

export const StepForm: React.FC = () => {
  const methods = useForm<FormData>()
  const { goBackwards, goForwards, currentIndex, isFirstStep, isLastStep } = useFormStep(9)
  console.log(currentIndex)
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
      description: 'Framework con el cual vas a trabajar o hacer el proyecto',
      step: <Framework key="framework" />,
    },
    {
      title: 'Conocimiento en base de datos SQL',
      description: 'Selecciona el nivel de conocimiento de Base de datos',
      step: <KnowledgeDB key="knowledgeDB" />,

    },
    {
      title: 'Tiempo de duración del proyecto',
      description: 'EL tiempo por el cual vas a estar trabajador con el proyecto',
      step: <ProjectTime key="projectTime" />,

    },
    {
      title: 'Tipo de proyecto',
      description: 'Lorem ipsum dolor sit amet.',
      step: <TypeProject key="typeProject" />,
    }
  ]

  const onSubmit: SubmitHandler<FormData> = (data) => {

    if (isLastStep) {
      // Final submission logic here
      console.log('Form Submitted', data)
    } else {
      goForwards()
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='grid grid-rows-12 h-full'>
        <div className='row-span-2 border-b border-slate-300 px-4 flex items-center gap-x-4'>
          <div className='ring-4 ring-primary p-2 rounded-full aspect-square flex justify-center items-center'>
            <p>{steps.indexOf(steps[currentIndex]) + 1} / {steps.length}</p>
          </div>
          <div>
            <p className='font-semibold text-xl'>{steps[currentIndex].title}</p>
            <p>{steps[currentIndex].description}</p>
          </div>
        </div>
        <ScrollArea className='row-span-9 h-[37rem] px-4'>
          {steps[currentIndex].step}
        </ScrollArea>
        <div className='row-span-1 border-t border-slate-300 px-4'>
          <div className="grid grid-cols-2 h-full">
            <div className='flex justify-start items-center'>
              {isFirstStep === false && <Button type='button' size='lg' variant='secondary' onClick={goBackwards}>
                <MoveLeft className="mr-2 h-4 w-4" /> Atrás
              </Button>}
            </div>
            <div className='flex justify-end items-center'>
              <Button type="submit" size="lg">
                {isLastStep ? 'Submit' : 'Siguiente'}
                <MoveRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
