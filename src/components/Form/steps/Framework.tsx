import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'

export const Framework: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector control={control} description='Framework con el cuales vas a trabajar o hacer el proyecto' label='Framework' name='framework' type="multiple">
      <ToggleGroupItem value="React" aria-label="Toggle bold">
        React
      </ToggleGroupItem>
      <ToggleGroupItem value="Svelte" aria-label="Toggle italic">
        Svelte
      </ToggleGroupItem>
      <ToggleGroupItem value="Vue" aria-label="Toggle italic">
        Vue
      </ToggleGroupItem>
      <ToggleGroupItem value="Angular" aria-label="Toggle italic">
        Angular
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
