import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'
import { Tally1, Tally2, Tally3 } from 'lucide-react'

export const KnowledgeDB: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector
      control={control}
      description=''
      label=''
      name='conocimiento_bd'
      type="single"
      classNameContainer='gap-4 grid grid-cols-1 md:grid-cols-3'
    >
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="bajo" aria-label="Toggle knowledge date base down">
        <Tally1 className='h-48 w-48 mb-2' strokeWidth={0.75} />
        Bajo
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="medio" aria-label="Toggle knowledge date base mid">
        <Tally2 className='h-48 w-48 mb-2' strokeWidth={0.75} />
        Medio
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="alto" aria-label="Toggle knowledge date base up">
        <Tally3 className='h-48 w-48 mb-2' strokeWidth={0.75} />
        Alto
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
