import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'
import Image from 'next/image'

const LENGUAJE = [
  { "logo": "javascript.svg", "name": "JavaScript" },
  { "logo": "python.svg", "name": "Python" },
  { "logo": "java.svg", "name": "Java" },
  { "logo": "c++.svg", "name": "C/C++" },
  { "logo": "csharp.svg", "name": "C#" },
  { "logo": "php.svg", "name": "PHP" },
  { "logo": "typescript.svg", "name": "TypeScript" },
  { "logo": "swift.svg", "name": "Swift" },
  { "logo": "kotlin.svg", "name": "Kotlin" },
  { "logo": "golang.svg", "name": "Go" },
  { "logo": "rust.svg", "name": "Rust" }
]

export const Lenguaje: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector
      control={control}
      label=''
      description=''
      classNameContainer='gap-4 grid grid-cols-3 px-4'
      name='lenguaje'
      type="multiple"
    >
      {
        LENGUAJE.map(lenguaje => (
          <ToggleGroupItem className='flex flex-col h-24 p-3 border-solid border-slate-300' value={lenguaje.name} aria-label={`Toggle ${lenguaje.name}`} key={lenguaje.name.replace('/', '').replace('#', '').replaceAll('+', '')}>
            <Image className='mb-4 mt-2 h-10 select-none' width={40} height={40} src={`/lenguajes/${lenguaje.logo}`} alt={lenguaje.logo} title={lenguaje.logo} loading='lazy' />
            {lenguaje.name}
          </ToggleGroupItem>
        ))
      }
    </ToggleSelector>
  )
}
