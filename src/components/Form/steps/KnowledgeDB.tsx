import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'

export const KnowledgeDB: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector control={control} description='Selecciona el nivel de conocimiento de Base de datos' label='Nivel de manejo de base de datos' name='conocimiento_bd' type="single">
      <ToggleGroupItem value="bajo" aria-label="Toggle bold">
        Bajo
      </ToggleGroupItem>
      <ToggleGroupItem value="medio" aria-label="Toggle italic">
        Medio
      </ToggleGroupItem>
      <ToggleGroupItem value="alto" aria-label="Toggle italic">
        Alto
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
