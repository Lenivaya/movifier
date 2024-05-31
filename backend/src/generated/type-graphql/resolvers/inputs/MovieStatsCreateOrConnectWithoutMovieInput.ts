import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStatsCreateWithoutMovieInput } from "../inputs/MovieStatsCreateWithoutMovieInput";
import { MovieStatsWhereUniqueInput } from "../inputs/MovieStatsWhereUniqueInput";

@TypeGraphQL.InputType("MovieStatsCreateOrConnectWithoutMovieInput", {})
export class MovieStatsCreateOrConnectWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieStatsWhereUniqueInput, {
    nullable: false
  })
  where!: MovieStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieStatsCreateWithoutMovieInput, {
    nullable: false
  })
  create!: MovieStatsCreateWithoutMovieInput;
}
