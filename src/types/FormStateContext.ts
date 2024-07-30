import { SubmitHandler, useForm } from "react-hook-form"
import { FormSchema } from "./formSchema"
import { SalarySchemaType } from "./salarySchema"
import { ResponseError } from "./error"

export type FormStateContext = {
  isLoading: boolean
  generation: SalarySchemaType
  form: ReturnType<typeof useForm<FormSchema>>
  currentIndex: number
  isFirstStep: boolean
  isLastStep: boolean
  isError: ResponseError | Error | null
  onSubmit: SubmitHandler<FormSchema>
  goBackwards: () => void
  resetForm: () => void
}
