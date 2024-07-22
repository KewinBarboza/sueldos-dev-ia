import { useFormContext } from 'react-hook-form'
import * as Flags from './../../Icons'
import { ToggleSelector } from '@/components/ToggleSelector'
import { ToggleGroupItem } from '@/components/ui/toggle-group'

const COUNTRY = [
  { "name": "Argentina", "flag": Flags.Argentina },
  { "name": "Bolivia", "flag": Flags.Bolivia },
  { "name": "Chile", "flag": Flags.Chile },
  { "name": "Colombia", "flag": Flags.Colombia },
  { "name": "Costa Rica", "flag": Flags.CostaRica },
  { "name": "Ecuador", "flag": Flags.Ecuador },
  { "name": "El Salvador", "flag": Flags.ElSalvador },
  { "name": "España", "flag": Flags.Espana },
  { "name": "Guatemala", "flag": Flags.Guatemala },
  { "name": "Honduras", "flag": Flags.Honduras },
  { "name": "México", "flag": Flags.Mexico },
  { "name": "Nicaragua", "flag": Flags.Nicaragua },
  { "name": "Panamá", "flag": Flags.Panama },
  { "name": "Paraguay", "flag": Flags.Paraguay },
  { "name": "Perú", "flag": Flags.Peru },
  { "name": "Puerto Rico", "flag": Flags.PuertoRico },
  { "name": "República Dominicana", "flag": Flags.RepublicaDominicana },
  { "name": "Uruguay", "flag": Flags.Uruguay },
  { "name": "Venezuela", "flag": Flags.Venezuela }
]

export const Country: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <ToggleSelector control={control} description='Seleccione el país' label='País' name='pais' type="single" classNameContainer='gap-4 grid grid-cols-3'>
      {COUNTRY.map(country => (
        <ToggleGroupItem className='flex flex-col h-24 border-solid border-slate-300' key={country.name} value={country.name} aria-label={`Toggle ${country.name}`}>
          <country.flag />
          {country.name}
        </ToggleGroupItem>
      ))}
    </ToggleSelector>
  )
}
