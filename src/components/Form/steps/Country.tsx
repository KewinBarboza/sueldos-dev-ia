import { useFormContext } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export const Country: React.FC = () => {
  const { control, formState: { errors } } = useFormContext()

  return (
    <FormField
      control={control}
      name="pais"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="font-semibold">País</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger
                id="model"
                className="items-start [&_[data-description]]:hidden"
              >
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="España">
                  España
                </SelectItem>
                <SelectItem value="Colombia">
                  Colombia
                </SelectItem>
                <SelectItem value="Venezuela">
                  Venezuela
                </SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription>
            This is your public display name.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
