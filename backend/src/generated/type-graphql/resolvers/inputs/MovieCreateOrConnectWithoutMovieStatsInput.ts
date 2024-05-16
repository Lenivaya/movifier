import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutMovieStatsInput } from "../inputs/MovieCreateWithoutMovieStatsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateOrConnectWithoutMovieStatsInput", {})
export class MovieCreateOrConnectWithoutMovieStatsInput {
  @TypeGraphQL.Field((_type) => MovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieCreateWithoutMovieStatsInput, {
    nullable: false,
  })
  create!: MovieCreateWithoutMovieStatsInput;
}
