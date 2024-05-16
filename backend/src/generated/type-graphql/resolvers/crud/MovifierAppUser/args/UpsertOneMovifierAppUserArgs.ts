import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovifierAppUserCreateInput } from "../../../inputs/MovifierAppUserCreateInput";
import { MovifierAppUserUpdateInput } from "../../../inputs/MovifierAppUserUpdateInput";
import { MovifierAppUserWhereUniqueInput } from "../../../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovifierAppUserArgs {
  @TypeGraphQL.Field((_type) => MovifierAppUserWhereUniqueInput, {
    nullable: false,
  })
  where!: MovifierAppUserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovifierAppUserCreateInput, {
    nullable: false,
  })
  create!: MovifierAppUserCreateInput;

  @TypeGraphQL.Field((_type) => MovifierAppUserUpdateInput, {
    nullable: false,
  })
  update!: MovifierAppUserUpdateInput;
}
