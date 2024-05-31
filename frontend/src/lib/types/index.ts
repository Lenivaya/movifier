import { Option } from '@mobily/ts-belt'

export const isSome = <T>(x: Option<T>): x is Exclude<T, null | undefined> =>
  x !== null && x !== undefined

export const isNone = <T>(x: Option<T>): x is null | undefined => !isSome(x)
