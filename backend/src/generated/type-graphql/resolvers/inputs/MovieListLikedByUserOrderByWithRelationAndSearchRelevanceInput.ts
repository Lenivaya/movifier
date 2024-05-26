import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserOrderByRelevanceInput } from "../inputs/MovieListLikedByUserOrderByRelevanceInput";
import { MovieListOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovieListOrderByWithRelationAndSearchRelevanceInput";
import { MovifierAppUserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovifierAppUserOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieListLikedByUserOrderByWithRelationAndSearchRelevanceInput", {})
export class MovieListLikedByUserOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movieListId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieListOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  movieList?: MovieListOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  user?: MovifierAppUserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: MovieListLikedByUserOrderByRelevanceInput | undefined;
}
