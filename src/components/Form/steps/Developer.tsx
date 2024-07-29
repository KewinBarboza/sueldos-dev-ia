import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'
import { AppWindow, Gamepad2, Layers3, Server, Smartphone } from 'lucide-react'

export const Developer: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector control={control} description='' label='' name='desarrollador' type="multiple" classNameContainer='gap-4 grid grid-cols-3'>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="BackEnd" aria-label="Toggle BackEnd">
        <Server className='h-48 w-48' strokeWidth={0.75} />
        BackEnd
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="FrontEnd" aria-label="Toggle FrontEnd">
        <AppWindow className='h-48 w-48' strokeWidth={0.75} />
        FrontEnd
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="FullStack" aria-label="Toggle FullStack">
        <Layers3 className='h-48 w-48' strokeWidth={0.75} />
        FullStack
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="Movil" aria-label="Toggle móvil">
        <Smartphone className='h-48 w-48' strokeWidth={0.75} />
        Movil
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="VideoJuegos" aria-label="Toggle VideoJuegos">
        <Gamepad2 className='h-48 w-48' strokeWidth={0.75} />
        VideoJuegos
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
