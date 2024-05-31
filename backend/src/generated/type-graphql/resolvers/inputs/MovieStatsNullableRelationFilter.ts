import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStatsWhereInput } from "../inputs/MovieStatsWhereInput";

@TypeGraphQL.InputType("MovieStatsNullableRelationFilter", {})
export class MovieStatsNullableRelationFilter {
  @TypeGraphQL.Field(_type => MovieStatsWhereInput, {
    nullable: true
  })
  is?: MovieStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieStatsWhereInput, {
    nullable: true
  })
  isNot?: MovieStatsWhereInput | undefined;
}
