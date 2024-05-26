import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserUpdateWithoutMovieInput } from "../inputs/MovieWatchedByUserUpdateWithoutMovieInput";
import { MovieWatchedByUserWhereUniqueInput } from "../inputs/MovieWatchedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput", {})
export class MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWatchedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieWatchedByUserUpdateWithoutMovieInput, {
    nullable: false
  })
  data!: MovieWatchedByUserUpdateWithoutMovieInput;
}
