import React from 'react'
import { Button } from './ui/button'
import { useFormState } from '@/hook/useFormState'
import { RefreshCcw } from 'lucide-react'

export function ButtonReset() {
  const { resetForm, generation } = useFormState()

  return (
    <>
      {
        generation && (
          <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
            onClick={() => resetForm()}
          >
            <RefreshCcw className="size-3.5" />
            Iniciar de nuevo
          </Button>
        )
      }
    </>
  )
}
