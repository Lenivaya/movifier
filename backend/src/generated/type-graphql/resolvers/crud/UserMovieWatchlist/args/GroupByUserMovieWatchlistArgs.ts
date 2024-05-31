import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserMovieWatchlistOrderByWithAggregationInput } from "../../../inputs/UserMovieWatchlistOrderByWithAggregationInput";
import { UserMovieWatchlistScalarWhereWithAggregatesInput } from "../../../inputs/UserMovieWatchlistScalarWhereWithAggregatesInput";
import { UserMovieWatchlistWhereInput } from "../../../inputs/UserMovieWatchlistWhereInput";
import { UserMovieWatchlistScalarFieldEnum } from "../../../../enums/UserMovieWatchlistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserMovieWatchlistArgs {
  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereInput, {
    nullable: true
  })
  where?: UserMovieWatchlistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserMovieWatchlistOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"createdAt" | "userId" | "movieId">;

  @TypeGraphQL.Field(_type => UserMovieWatchlistScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserMovieWatchlistScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
