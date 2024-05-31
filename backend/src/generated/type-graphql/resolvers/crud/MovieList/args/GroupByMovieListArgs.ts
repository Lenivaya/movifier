import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListOrderByWithAggregationInput } from "../../../inputs/MovieListOrderByWithAggregationInput";
import { MovieListScalarWhereWithAggregatesInput } from "../../../inputs/MovieListScalarWhereWithAggregatesInput";
import { MovieListWhereInput } from "../../../inputs/MovieListWhereInput";
import { MovieListScalarFieldEnum } from "../../../../enums/MovieListScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieListArgs {
  @TypeGraphQL.Field(_type => MovieListWhereInput, {
    nullable: true
  })
  where?: MovieListWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieListOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovieListOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name" | "description" | "tags" | "userId">;

  @TypeGraphQL.Field(_type => MovieListScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovieListScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
