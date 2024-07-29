import { SupportedCurrencies } from "@/types/currencies"
import { FormSchema } from "@/types/formSchema"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const prompt = (values: FormSchema) => (`Soy un desarrollador ${values.experiencia} de ${values.pais} y voy a trabajar en un proyecto para la
  creación de ${values.tipo_proyecto} el tiempo seria ${values.tiempo} con el lenguajes ${values.lenguaje.join(',')} y con
  el framework ${values.framework.join(',')} mi nivel educativo es ${values.nivel_educativo} soy un desarrollador ${values.desarrollador} y mis conocimiento
  sobre base de datos son de nivel ${values.conocimiento_bd} cuando debería cobrar`)

// Define una interfaz para representar la estructura de datos del país y moneda
interface LocaleInfo {
  code: string
  currency: string
}

// Objeto que mapea monedas a información de localización
const currencyToLocale: Record<SupportedCurrencies | string, LocaleInfo> = {
  ARS: { code: "es-AR", currency: "ARS" }, // Argentina
  BOB: { code: "es-BO", currency: "BOB" }, // Bolivia
  CLP: { code: "es-CL", currency: "CLP" }, // Chile
  COP: { code: "es-CO", currency: "COP" }, // Colombia
  CRC: { code: "es-CR", currency: "CRC" }, // Costa Rica
  CUP: { code: "es-CU", currency: "CUP" }, // Cuba
  DOP: { code: "es-DO", currency: "DOP" }, // República Dominicana
  EUR: { code: "es-ES", currency: "EUR" }, // España
  GTQ: { code: "es-GT", currency: "GTQ" }, // Guatemala
  HNL: { code: "es-HN", currency: "HNL" }, // Honduras
  MXN: { code: "es-MX", currency: "MXN" }, // México
  NIO: { code: "es-NI", currency: "NIO" }, // Nicaragua
  PAB: { code: "es-PA", currency: "PAB" }, // Panamá
  PYG: { code: "es-PY", currency: "PYG" }, // Paraguay
  PEN: { code: "es-PE", currency: "PEN" }, // Perú
  UYU: { code: "es-UY", currency: "UYU" }, // Uruguay
  VES: { code: "es-VE", currency: "VES" }, // Venezuela
}

// Función para obtener el código del país y la moneda
export function getCountryCode(currency: SupportedCurrencies | string): LocaleInfo | null {
  return currencyToLocale[currency] || null
}
