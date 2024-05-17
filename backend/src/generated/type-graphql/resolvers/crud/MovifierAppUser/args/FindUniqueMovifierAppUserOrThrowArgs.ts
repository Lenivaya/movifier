import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovifierAppUserWhereUniqueInput } from "../../../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMovifierAppUserOrThrowArgs {
  @TypeGraphQL.Field((_type) => MovifierAppUserWhereUniqueInput, {
    nullable: false,
  })
  where!: MovifierAppUserWhereUniqueInput;
}
