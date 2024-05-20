import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListStatsOrderByWithAggregationInput } from "../../../inputs/MovieListStatsOrderByWithAggregationInput";
import { MovieListStatsScalarWhereWithAggregatesInput } from "../../../inputs/MovieListStatsScalarWhereWithAggregatesInput";
import { MovieListStatsWhereInput } from "../../../inputs/MovieListStatsWhereInput";
import { MovieListStatsScalarFieldEnum } from "../../../../enums/MovieListStatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieListStatsArgs {
  @TypeGraphQL.Field(_type => MovieListStatsWhereInput, {
    nullable: true
  })
  where?: MovieListStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieListStatsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovieListStatsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListStatsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "views" | "likes" | "movieListId">;

  @TypeGraphQL.Field(_type => MovieListStatsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovieListStatsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
