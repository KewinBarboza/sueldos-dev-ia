import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'
import { AppWindow, AppWindowMac, Gamepad, LayoutTemplate, PanelsTopLeft, TabletSmartphone } from 'lucide-react'

export const TypeProject: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector
      control={control}
      classNameContainer='gap-4 grid grid-cols-3'
      label=''
      description=''
      name='tipo_proyecto'
      type="single"
    >
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="App móvil" aria-label="Toggle App móvil">
        <TabletSmartphone className='h-48 w-48 mb-2' strokeWidth={0.75} />
        App móvil
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="Landing page" aria-label="Toggle Landing page">
        <LayoutTemplate className='h-48 w-48 mb-2' strokeWidth={0.75} />
        Landing page
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="Sistema web" aria-label="Toggle Sistema web">
        <PanelsTopLeft className='h-48 w-48 mb-2' strokeWidth={0.75} />
        Sistema web
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="Videojuegos" aria-label="Toggle Videojuegos">
        <Gamepad className='h-48 w-48 mb-2' strokeWidth={0.75} />
        Videojuegos
      </ToggleGroupItem>
      <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300 py-3' value="Aplicación nativa de Windows/Mac " aria-label="Toggle Aplicación nativa">
        <AppWindowMac className='h-48 w-48 mb-2' strokeWidth={0.75} />
        App nativa de Windows/Mac
      </ToggleGroupItem>
    </ToggleSelector>
  )
}
