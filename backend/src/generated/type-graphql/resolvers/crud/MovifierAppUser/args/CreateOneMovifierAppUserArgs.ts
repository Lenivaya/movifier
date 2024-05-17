import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovifierAppUserCreateInput } from "../../../inputs/MovifierAppUserCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovifierAppUserArgs {
  @TypeGraphQL.Field((_type) => MovifierAppUserCreateInput, {
    nullable: false,
  })
  data!: MovifierAppUserCreateInput;
}
