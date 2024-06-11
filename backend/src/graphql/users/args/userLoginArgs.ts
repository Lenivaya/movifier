import * as TypeGraphQL from 'type-graphql'

import { UserLoginInput } from '@/graphql/users/inputs/userLoginInput'

@TypeGraphQL.ArgsType()
export class UserLoginArgs {
  @TypeGraphQL.Field((_type) => UserLoginInput, {
    nullable: false
  })
  data!: UserLoginInput
}
