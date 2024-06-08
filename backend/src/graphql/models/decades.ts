import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ObjectType()
export class Decades {
  @TypeGraphQL.Field(() => [Number])
  decades!: number[]
}
