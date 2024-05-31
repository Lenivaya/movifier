import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserCreateWithoutUserInput } from "../inputs/MovieWatchedByUserCreateWithoutUserInput";
import { MovieWatchedByUserWhereUniqueInput } from "../inputs/MovieWatchedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieWatchedByUserCreateOrConnectWithoutUserInput", {})
export class MovieWatchedByUserCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWatchedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieWatchedByUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: MovieWatchedByUserCreateWithoutUserInput;
}
