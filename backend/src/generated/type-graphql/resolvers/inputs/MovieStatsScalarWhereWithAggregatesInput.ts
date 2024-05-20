import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieStatsScalarWhereWithAggregatesInput", {})
export class MovieStatsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MovieStatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MovieStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MovieStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MovieStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  timesWatchedCount?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  totalRatingsCount?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  totalLikesCount?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  overallPlaceINTop?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  avgRating?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  movieId?: StringWithAggregatesFilter | undefined;
}
