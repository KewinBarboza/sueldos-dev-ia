import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { ToggleGroup } from './ui/toggle-group'
import { Control, ControllerRenderProps, FieldValues } from 'react-hook-form'
import { ScrollArea } from './ui/scroll-area'

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
        <FormItem className='px-4'>
          <FormLabel className="font-semibold">{label}</FormLabel>
          <FormControl>
            <ScrollArea className='h-96 pr-2 py-3' >
              <ToggleGroup onValueChange={field.onChange} defaultValue={field.value} size={"lg"} type={type} variant="outline" className={classNameContainer} >
                {children}
              </ToggleGroup>
            </ScrollArea>
          </FormControl>
          <FormDescription>
            {description}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
