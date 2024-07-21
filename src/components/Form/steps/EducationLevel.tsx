import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'

export const EducationLevel: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector control={control} description='como aprendiste a programar' label='Nivel educativo' name='nivel_educativo' type="single">
      <ToggleGroupItem value="Bootcamp" aria-label="Toggle bold">
        Bootcamp
      </ToggleGroupItem>
      <ToggleGroupItem value="Ingeniería" aria-label="Toggle italic">
        Ingeniería
      </ToggleGroupItem>
      <ToggleGroupItem value="Autodidacta" aria-label="Toggle italic">
        Autodidacta
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
