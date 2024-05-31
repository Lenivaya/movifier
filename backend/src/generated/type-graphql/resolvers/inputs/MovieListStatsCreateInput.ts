import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateNestedOneWithoutStatsInput } from "../inputs/MovieListCreateNestedOneWithoutStatsInput";

@TypeGraphQL.InputType("MovieListStatsCreateInput", {})
export class MovieListStatsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  views!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  likes!: number;

  @TypeGraphQL.Field(_type => MovieListCreateNestedOneWithoutStatsInput, {
    nullable: false
  })
  MovieList!: MovieListCreateNestedOneWithoutStatsInput;
}
