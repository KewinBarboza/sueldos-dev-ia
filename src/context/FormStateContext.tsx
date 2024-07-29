import { FormStateContext as FormStateContextType } from '@/types/FormStateContext'
import { createContext } from 'react'

export const FormStateContext = createContext<FormStateContextType | null>(null)
