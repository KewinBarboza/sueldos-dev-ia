import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'

export const TypeProject: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector
      control={control}
      classNameContainer='gap-4 grid grid-cols-3'
      label='Tipo de proyecto'
      description='Tipo de aplicativo por el cual vas a estar trabajando'
      name='tipo_proyecto'
      type="single"
    >
      <ToggleGroupItem value="App móvil" aria-label="Toggle bold">
        App móvil
      </ToggleGroupItem>
      <ToggleGroupItem value="Landing page" aria-label="Toggle bold">
        Landing page
      </ToggleGroupItem>
      <ToggleGroupItem value="Sistema web" aria-label="Toggle italic">
        Sistema web
      </ToggleGroupItem>
      <ToggleGroupItem value="Videojuegos" aria-label="Toggle italic">
        Videojuegos
      </ToggleGroupItem>
      <ToggleGroupItem value="Aplicación nativa de Windows/Mac " aria-label="Toggle italic">
        Aplicación nativa de Windows/Mac
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
