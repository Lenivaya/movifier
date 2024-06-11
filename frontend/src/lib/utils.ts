import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { isSome } from '@/lib/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isString = (value: any): value is string =>
  typeof value === 'string'

export const NaNtoZero = (value: number) => (isNaN(value) ? 0 : value)

export const truncate = (str: string, maxLength: number) =>
  str.length > maxLength ? str.slice(0, maxLength) + '...' : str

export const arrayNotNull = <T>(array: Array<T>) => array.filter(isSome)

export const nonEmpty = (value: string) => value.trim().length > 0
