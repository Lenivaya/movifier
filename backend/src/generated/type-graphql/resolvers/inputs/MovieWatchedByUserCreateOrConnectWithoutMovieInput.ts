import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserCreateWithoutMovieInput } from "../inputs/MovieWatchedByUserCreateWithoutMovieInput";
import { MovieWatchedByUserWhereUniqueInput } from "../inputs/MovieWatchedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieWatchedByUserCreateOrConnectWithoutMovieInput", {})
export class MovieWatchedByUserCreateOrConnectWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWatchedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieWatchedByUserCreateWithoutMovieInput, {
    nullable: false
  })
  create!: MovieWatchedByUserCreateWithoutMovieInput;
}
