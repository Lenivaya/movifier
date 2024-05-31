import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutMovieListLikedByUserInput } from "../inputs/MovifierAppUserCreateWithoutMovieListLikedByUserInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput", {})
export class MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovifierAppUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutMovieListLikedByUserInput, {
    nullable: false
  })
  create!: MovifierAppUserCreateWithoutMovieListLikedByUserInput;
}
