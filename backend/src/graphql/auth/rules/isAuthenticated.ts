import { Rule } from 'typegraphql-authchecker'
import { AppContext } from '@/graphql/context'
import { isSome } from '@/lib/types/option'

export const isAuthenticated: Rule<AppContext> = ({ context }) => {
  return isSome(context.jwt)
}
