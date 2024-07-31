import { FormProvider } from 'react-hook-form'
import { Button } from '../ui/button'
import { steps } from './steps'
import { MoveLeft, MoveRight } from 'lucide-react'
import { ScrollArea } from '../ui/scroll-area'
import { useFormState } from '@/hook/useFormState'

export const FormStep: React.FC = () => {
  const { form, currentIndex, isFirstStep, isLastStep, goBackwards, onSubmit } = useFormState()

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='grid grid-rows-12'>
        <div className='row-span-2 border-b border-slate-300 px-4 flex items-center gap-x-4'>
          <div className='aspect-square flex justify-center items-center'>
            <div className="relative size-16">
              <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-400 dark:text-neutral-700" strokeWidth="3"></circle>
                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-green-500" strokeWidth="3" strokeDasharray="100" strokeDashoffset={90 - (currentIndex + 1) * 10} strokeLinecap="round"></circle>
              </svg>
              <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <p className='text-sm'>{steps.indexOf(steps[currentIndex]) + 1} / {steps.length}</p>
              </div>
            </div>
          </div>
          <div>
            <p className='font-semibold text-xl'>{steps[currentIndex].title}</p>
            <p>{steps[currentIndex].description}</p>
          </div>
        </div>
        <ScrollArea className='row-span-9 px-4 overflow-auto min-h-[68dvh] max-h-[68dvh]'>
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
              <Button type='submit' size="lg">
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
