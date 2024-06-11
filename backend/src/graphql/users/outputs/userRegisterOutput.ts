import * as TypeGraphQL from 'type-graphql'
import { MovifierAppUser } from '@/generated/type-graphql'

@TypeGraphQL.ObjectType()
export class UserRegisterOutput {
  @TypeGraphQL.Field((_type) => MovifierAppUser, {
    nullable: false
  })
  user!: MovifierAppUser

  @TypeGraphQL.Field((_type) => String, {
    nullable: false
  })
  token!: string
}
