import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'

export const TypeProject: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector
      control={control}
      classNameContainer='gap-4 grid grid-cols-3'
      label=''
      description=''
      name='tipo_proyecto'
      type="single"
    >
      <ToggleGroupItem className='flex flex-col h-24 p-3 border-solid border-slate-300' value="App móvil" aria-label="Toggle bold">
        App móvil
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 p-3 border-solid border-slate-300' value="Landing page" aria-label="Toggle bold">
        Landing page
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 p-3 border-solid border-slate-300' value="Sistema web" aria-label="Toggle italic">
        Sistema web
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 p-3 border-solid border-slate-300' value="Videojuegos" aria-label="Toggle italic">
        Videojuegos
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 p-3 border-solid border-slate-300' value="Aplicación nativa de Windows/Mac " aria-label="Toggle italic">
        Aplicación nativa de Windows/Mac
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
