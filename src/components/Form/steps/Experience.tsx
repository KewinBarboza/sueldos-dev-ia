import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'

export const Experience: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector
      control={control}
      description=''
      label=''
      name='experiencia'
      type="single"
      classNameContainer='gap-4 grid grid-cols-1'
    >
      <ToggleGroupItem className='flex flex-col h-16 border-solid border-slate-300' value="junior" aria-label="Toggle bold">
        1 - 3 años de experiencia
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-16 border-solid border-slate-300' value="mid" aria-label="Toggle italic">
        4 - 9 años de experiencia
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-16 border-solid border-slate-300' value="Senior" aria-label="Toggle italic">
        10 - 20 años de experiencia
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
