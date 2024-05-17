import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovifierAppUserUpdateInput } from "../../../inputs/MovifierAppUserUpdateInput";
import { MovifierAppUserWhereUniqueInput } from "../../../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovifierAppUserArgs {
  @TypeGraphQL.Field((_type) => MovifierAppUserUpdateInput, {
    nullable: false,
  })
  data!: MovifierAppUserUpdateInput;

  @TypeGraphQL.Field((_type) => MovifierAppUserWhereUniqueInput, {
    nullable: false,
  })
  where!: MovifierAppUserWhereUniqueInput;
}
