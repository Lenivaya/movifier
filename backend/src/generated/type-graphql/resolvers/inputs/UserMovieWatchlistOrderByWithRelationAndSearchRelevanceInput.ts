import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovieOrderByWithRelationAndSearchRelevanceInput";
import { MovifierAppUserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovifierAppUserOrderByWithRelationAndSearchRelevanceInput";
import { UserMovieWatchlistOrderByRelevanceInput } from "../inputs/UserMovieWatchlistOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput", {})
export class UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput {
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
  movieId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  movie?: MovieOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  user?: MovifierAppUserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => UserMovieWatchlistOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: UserMovieWatchlistOrderByRelevanceInput | undefined;
}
