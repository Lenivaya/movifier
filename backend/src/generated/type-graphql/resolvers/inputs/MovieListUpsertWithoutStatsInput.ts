import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateWithoutStatsInput } from "../inputs/MovieListCreateWithoutStatsInput";
import { MovieListUpdateWithoutStatsInput } from "../inputs/MovieListUpdateWithoutStatsInput";
import { MovieListWhereInput } from "../inputs/MovieListWhereInput";

@TypeGraphQL.InputType("MovieListUpsertWithoutStatsInput", {})
export class MovieListUpsertWithoutStatsInput {
  @TypeGraphQL.Field(_type => MovieListUpdateWithoutStatsInput, {
    nullable: false
  })
  update!: MovieListUpdateWithoutStatsInput;

  @TypeGraphQL.Field(_type => MovieListCreateWithoutStatsInput, {
    nullable: false
  })
  create!: MovieListCreateWithoutStatsInput;

  @TypeGraphQL.Field(_type => MovieListWhereInput, {
    nullable: true
  })
  where?: MovieListWhereInput | undefined;
}
