import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'
import { Book, Computer, GraduationCap } from 'lucide-react'

export const EducationLevel: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector
      control={control}
      description=''
      label=''
      name='nivel_educativo'
      type="single"
      classNameContainer='gap-4 grid grid-cols-3'
    >
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="Bootcamp" aria-label="Toggle Bootcamp">
        <Computer className='h-48 w-48 mb-2' strokeWidth={0.75} />
        Bootcamp
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="Ingeniería" aria-label="Toggle Ingeniería">
        <GraduationCap className='h-48 w-48 mb-2' strokeWidth={0.75} />
        Ingeniería
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="Autodidacta" aria-label="Toggle Autodidacta">
        <Book className='h-48 w-48 mb-2' strokeWidth={0.75} />
        Autodidacta
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
