import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { MovieListStatsWhereInput } from "../inputs/MovieListStatsWhereInput";

@TypeGraphQL.InputType("MovieListStatsWhereUniqueInput", {})
export class MovieListStatsWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  movieListId?: string | undefined;

  @TypeGraphQL.Field(_type => [MovieListStatsWhereInput], {
    nullable: true
  })
  AND?: MovieListStatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListStatsWhereInput], {
    nullable: true
  })
  OR?: MovieListStatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListStatsWhereInput], {
    nullable: true
  })
  NOT?: MovieListStatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  views?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  likes?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListRelationFilter, {
    nullable: true
  })
  MovieList?: MovieListRelationFilter | undefined;
}
