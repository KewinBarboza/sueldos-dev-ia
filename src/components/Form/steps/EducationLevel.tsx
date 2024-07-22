import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'

export const EducationLevel: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector
      control={control}
      description='como aprendiste a programar'
      label='Nivel educativo'
      name='nivel_educativo'
      type="single"
      classNameContainer='gap-4 grid grid-cols-3'
    >
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300' value="Bootcamp" aria-label="Toggle Bootcamp">
        Bootcamp
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300' value="Ingeniería" aria-label="Toggle Ingeniería">
        Ingeniería
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300' value="Autodidacta" aria-label="Toggle Autodidacta">
        Autodidacta
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
