import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { ToggleGroup } from './ui/toggle-group'
import { Control, ControllerRenderProps, FieldValues } from 'react-hook-form'

type Props = {
  control?: Control<FieldValues> | undefined | any
  name: string,
  children: React.ReactNode,
  label: string,
  description: string,
  type: "multiple" | "single",
  classNameContainer: string
}

export function ToggleSelector({ control, name, children, label, description, type, classNameContainer }: Props) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }: { field: ControllerRenderProps<FieldValues, string> }) => (
        <FormItem>
          <FormLabel className="font-semibold">{label}</FormLabel>
          <FormMessage className='text-lg text-center bg-red-200 p-2 rounded-lg border border-red-500' />
          <FormControl>
            <ToggleGroup onValueChange={field.onChange} defaultValue={field.value} size={"lg"} type={type} variant="outline" className={classNameContainer} >
              {children}
            </ToggleGroup>
          </FormControl>
          <FormDescription>
            {description}
          </FormDescription>
        </FormItem>
      )}
    />
  )
}
