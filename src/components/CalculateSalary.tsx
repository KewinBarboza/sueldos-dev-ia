import { FormStep } from './Form/FormStep'
import { useFormState } from '@/hook/useFormState'
import { Salary } from './Salary'
import { Loading } from './Loading'

export function CalculateSalary() {
  const { generation, isLoading } = useFormState()

  if (isLoading) return <Loading />
  if (generation) return <Salary />

  return <FormStep />
}
