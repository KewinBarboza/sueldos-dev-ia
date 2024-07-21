import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'

export const Lenguaje: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector control={control} description='lenguaje de programación' label='Lenguaje' name='lenguaje' type="multiple">
      <ToggleGroupItem value="JavaScript" aria-label="Toggle bold">
        JavaScript
      </ToggleGroupItem>
      <ToggleGroupItem value="PHP" aria-label="Toggle italic">
        PHP
      </ToggleGroupItem>
      <ToggleGroupItem value="Python" aria-label="Toggle underline">
        Python
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
