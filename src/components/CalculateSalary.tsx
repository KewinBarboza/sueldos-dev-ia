import { FormStep } from './Form/FormStep'
import { useFormState } from '@/hook/useFormState'
import { Salary } from './Salary'

export function CalculateSalary() {
  const { generation, isLoading } = useFormState()

  if (isLoading) return <p>Loading...</p>
  if (generation) return <Salary />

  return <FormStep />
}
