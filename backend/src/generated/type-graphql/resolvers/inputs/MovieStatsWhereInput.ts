import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovieRelationFilter } from "../inputs/MovieRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieStatsWhereInput", {})
export class MovieStatsWhereInput {
  @TypeGraphQL.Field((_type) => [MovieStatsWhereInput], {
    nullable: true,
  })
  AND?: MovieStatsWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieStatsWhereInput], {
    nullable: true,
  })
  OR?: MovieStatsWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieStatsWhereInput], {
    nullable: true,
  })
  NOT?: MovieStatsWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  timesWatchedCount?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  totalRatingsCount?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  totalLikesCount?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  overallPlaceINTop?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => FloatFilter, {
    nullable: true,
  })
  avgRating?: FloatFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  movieId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieRelationFilter, {
    nullable: true,
  })
  movie?: MovieRelationFilter | undefined;
}
