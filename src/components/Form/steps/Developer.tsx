import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'
import { AppWindow, Server } from 'lucide-react'

export const Developer: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector control={control} description='Seleccione el tipo de desarrollador' label='Desarrollador' name='desarrollador' type="multiple" classNameContainer='gap-4 grid grid-cols-2'>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="BackEnd" aria-label="Toggle BackEnd">
        <Server className='h-48 w-48' strokeWidth={0.75} />
        BackEnd
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="FrontEnd" aria-label="Toggle FrontEd">
        <AppWindow className='h-48 w-48' strokeWidth={0.75} />
        FrontEnd
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
