import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListStatsWhereInput } from "../inputs/MovieListStatsWhereInput";

@TypeGraphQL.InputType("MovieListStatsNullableRelationFilter", {})
export class MovieListStatsNullableRelationFilter {
  @TypeGraphQL.Field(_type => MovieListStatsWhereInput, {
    nullable: true
  })
  is?: MovieListStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieListStatsWhereInput, {
    nullable: true
  })
  isNot?: MovieListStatsWhereInput | undefined;
}
