import { Rule } from 'typegraphql-authchecker'
import { AppContext } from '@/graphql/context'

export const isAdmin: Rule<AppContext> = ({ context }) => {
  return context.jwt?.userRole === 'ADMIN'
}
