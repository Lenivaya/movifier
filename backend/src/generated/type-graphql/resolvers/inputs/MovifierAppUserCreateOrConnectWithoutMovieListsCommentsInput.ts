import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutMovieListsCommentsInput } from "../inputs/MovifierAppUserCreateWithoutMovieListsCommentsInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput", {})
export class MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovifierAppUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutMovieListsCommentsInput, {
    nullable: false
  })
  create!: MovifierAppUserCreateWithoutMovieListsCommentsInput;
}
