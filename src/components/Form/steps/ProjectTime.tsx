import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'

export const ProjectTime: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector
      control={control}
      description=''
      label=''
      name='tiempo'
      type="single"
      classNameContainer='gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
    >
      <ToggleGroupItem className='flex flex-col h-16 border-solid border-slate-300' value="1 a 2 semanas" aria-label="Toggle 1 a 2 semanas">
        1 a 2 semanas
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-16 border-solid border-slate-300' value="3 a 7 semanas" aria-label="Toggle 3 a 7 semanas">
        3 a 7 semanas
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-16 border-solid border-slate-300' value="8 a 12 semanas" aria-label="Toggle 8 a 12 semanas">
        8 a 12 semanas
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-16 border-solid border-slate-300' value="Mas de 12 semanas" aria-label="Toggle mas de 12 semanas">
        Mas de 12 semanas
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-16 border-solid border-slate-300' value="Trabajo fijo" aria-label="Toggle trabajo fijo">
        Trabajo fijo
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
