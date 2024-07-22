import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'

const FRAMEWORK = [
  { "name": "React" },
  { "name": "Angular" },
  { "name": "Vue.js" },
  { "name": "Laravel" },
  { "name": "Symfony" },
  { "name": "CodeIgniter" },
  { "name": ".NET" },
  { "name": "Unity" },
  { "name": "Xamarin" },
  { "name": "Qt" },
  { "name": "Boost" },
  { "name": "Unreal Engine" },
  { "name": "Spring" },
  { "name": "Hibernate" },
  { "name": "Android" },
  { "name": "Django" },
  { "name": "Flask" },
  { "name": "Scikit-learn" }
]

export const Framework: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector control={control} description='Framework con el cuales vas a trabajar o hacer el proyecto' label='Framework' name='framework' type="multiple" classNameContainer='gap-4 grid grid-cols-3'>
      {FRAMEWORK.map(framework => (
        <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300' key={framework.name} value={framework.name} aria-label={`Toggle ${framework.name}`}>
          {/* <framework.flag /> */}
          {framework.name}
        </ToggleGroupItem>
      ))}
    </ToggleSelector>
  )
}
