import { useFormContext } from 'react-hook-form'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'
import Image from 'next/image'

const FRAMEWORK = [
  { "name": "React", "logo": "react.svg" },
  { "name": "Angular", "logo": "angular.svg" },
  { "name": "Vue.js", "logo": "vue.svg" },
  { "name": "Laravel", "logo": "laravel.svg" },
  { "name": "Symfony", "logo": "symfony.svg" },
  { "name": "CodeIgniter", "logo": "codeigniter.svg" },
  { "name": ".NET", "logo": "net.svg" },
  { "name": "Unity", "logo": "unity.svg" },
  { "name": "Xamarin", "logo": "xamarin.svg" },
  { "name": "Qt", "logo": "qt.svg" },
  { "name": "Boost", "logo": "Boost.svg" },
  { "name": "Unreal Engine", "logo": "unreal_engine_light.svg" },
  { "name": "Spring", "logo": "spring.svg" },
  { "name": "Hibernate", "logo": "Hibernate.svg" },
  { "name": "Android", "logo": "android.svg" },
  { "name": "Django", "logo": "django.svg" },
  { "name": "Flask", "logo": "flask.svg" },
  { "name": "Scikit-learn", "logo": "learn.png" }
]

export const Framework: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector
      control={control}
      description=''
      label=''
      name='framework'
      type="multiple"
      classNameContainer='gap-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3'>
      {FRAMEWORK.map(framework => (
        <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300' key={framework.name} value={framework.name} aria-label={`Toggle ${framework.name}`}>
          <Image className='mb-4 mt-2 object-contain select-none aspect-square' width={40} height={40} src={`/framework/${framework.logo}`} alt={framework.logo} title={framework.logo} loading='lazy' />
          {framework.name}
        </ToggleGroupItem>
      )
      )}
    </ToggleSelector>
  )
}
