import { FormStateContext } from "@/context/FormStateContext"
import { useContext } from "react"

export const useFormState = () => {
  const context = useContext(FormStateContext)

  if (!context) {
    throw new Error('useFormState must be used within a FormStateProvider')
  }

  return context
}
