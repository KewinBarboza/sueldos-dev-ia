import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'

export const Experience: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector control={control} description='Años de experiencia laboral' label='Años de experiencia' name='experiencia' type="single">
      <ToggleGroupItem value="junior" aria-label="Toggle bold">
        Junior 1 -3  años de experiencia
      </ToggleGroupItem>
      <ToggleGroupItem value="mid" aria-label="Toggle italic">
        Mid 4-9  años de experiencia
      </ToggleGroupItem>
      <ToggleGroupItem value="Senior" aria-label="Toggle italic">
        Senior de 10-20 años de experiencia
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
