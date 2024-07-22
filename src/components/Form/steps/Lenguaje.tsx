import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'
import * as Logos from './../../Icons'

const LENGUAJE = [
  { "logo": Logos.JavaScript, "name": "JavaScript" },
  { "logo": Logos.Python, "name": "Python" },
  { "logo": Logos.Java, "name": "Java" },
  { "logo": Logos.CMasMas, "name": "C/C++" },
  { "logo": Logos.CSharp, "name": "C#" },
  { "logo": Logos.PHP, "name": "PHP" },
  { "logo": Logos.TypeScript, "name": "TypeScript" },
  { "logo": Logos.Swift, "name": "Swift" },
  { "logo": Logos.Kotlin, "name": "Kotlin" },
  { "logo": Logos.Go, "name": "Go" },
  { "logo": Logos.Rust, "name": "Rust" }
]

export const Lenguaje: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector
      control={control}
      label='Lenguaje'
      description='lenguaje de programación'
      classNameContainer='gap-4 grid grid-cols-3 px-4'
      name='lenguaje'
      type="multiple"
    >
      {
        LENGUAJE.map(lenguaje => (
          <ToggleGroupItem className='flex flex-col h-24 p-3 border-solid border-slate-300' value={lenguaje.name} aria-label={`Toggle ${lenguaje.name}`} key={lenguaje.name.replace('/', '').replace('#', '').replaceAll('+', '')}>
            {/* <lenguaje.logo /> */}
            {lenguaje.name}
          </ToggleGroupItem>
        ))
      }
    </ToggleSelector>
  )
}
