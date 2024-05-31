import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentOrderByRelationAggregateInput } from "../inputs/MovieListCommentOrderByRelationAggregateInput";
import { MovieListLikedByUserOrderByRelationAggregateInput } from "../inputs/MovieListLikedByUserOrderByRelationAggregateInput";
import { MovieListOrderByRelevanceInput } from "../inputs/MovieListOrderByRelevanceInput";
import { MovieListStatsOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovieListStatsOrderByWithRelationAndSearchRelevanceInput";
import { MovieOrderByRelationAggregateInput } from "../inputs/MovieOrderByRelationAggregateInput";
import { MovifierAppUserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovifierAppUserOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieListOrderByWithRelationAndSearchRelevanceInput", {})
export class MovieListOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tags?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieOrderByRelationAggregateInput, {
    nullable: true
  })
  movies?: MovieOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  movieListAuthor?: MovifierAppUserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MovieListStatsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  stats?: MovieListStatsOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MovieListCommentOrderByRelationAggregateInput, {
    nullable: true
  })
  comments?: MovieListCommentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserOrderByRelationAggregateInput, {
    nullable: true
  })
  likedBy?: MovieListLikedByUserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieListOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: MovieListOrderByRelevanceInput | undefined;
}
