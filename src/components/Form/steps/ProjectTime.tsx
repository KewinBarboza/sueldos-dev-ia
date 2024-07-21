import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'

export const ProjectTime: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector control={control} description='EL tiempo por el cual vas a estar trabajador con el proyecto' label='Tiempo del proyecto' name='tiempo' type="single">
      <ToggleGroupItem value="1 a 2 semenas" aria-label="Toggle bold">
        1 a 2 semanas
      </ToggleGroupItem>
      <ToggleGroupItem value="3 a 7 semenas" aria-label="Toggle bold">
        3 a 7 semanas
      </ToggleGroupItem>
      <ToggleGroupItem value="8 a 12 semanas" aria-label="Toggle italic">
        8 a 12 semanas
      </ToggleGroupItem>
      <ToggleGroupItem value="mas de 12 semanas" aria-label="Toggle italic">
        Mas de 12 semanas
      </ToggleGroupItem>
      <ToggleGroupItem value="trabajo fijo" aria-label="Toggle italic">
        Trabajo fijo
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
