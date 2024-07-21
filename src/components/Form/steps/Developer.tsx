import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'

export const Developer: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector control={control} description='Seleccione el tipo de desarrollador' label='Desarrollador' name='desarrollador' type="multiple">
      <ToggleGroupItem value="BackEnd" aria-label="Toggle bold">
        BackEnd
      </ToggleGroupItem>
      <ToggleGroupItem value="FrontEnd" aria-label="Toggle italic">
        FrontEnd
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
