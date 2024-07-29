import { SubmitHandler, useForm } from "react-hook-form"
import { FormSchema } from "./formSchema"
import { SalarySchemaType } from "./salarySchema"

export type FormStateContext = {
  isLoading: boolean
  generation: SalarySchemaType
  form: ReturnType<typeof useForm<FormSchema>>
  currentIndex: number
  isFirstStep: boolean
  isLastStep: boolean
  onSubmit: SubmitHandler<FormSchema>
  goBackwards: () => void
}
