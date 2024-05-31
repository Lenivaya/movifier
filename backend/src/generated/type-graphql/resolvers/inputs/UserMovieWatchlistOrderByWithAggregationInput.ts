import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserMovieWatchlistCountOrderByAggregateInput } from "../inputs/UserMovieWatchlistCountOrderByAggregateInput";
import { UserMovieWatchlistMaxOrderByAggregateInput } from "../inputs/UserMovieWatchlistMaxOrderByAggregateInput";
import { UserMovieWatchlistMinOrderByAggregateInput } from "../inputs/UserMovieWatchlistMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserMovieWatchlistOrderByWithAggregationInput", {})
export class UserMovieWatchlistOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => UserMovieWatchlistCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserMovieWatchlistCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserMovieWatchlistMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserMovieWatchlistMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserMovieWatchlistMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserMovieWatchlistMinOrderByAggregateInput | undefined;
}
