import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStudioOrderByWithAggregationInput } from "../../../inputs/MovieStudioOrderByWithAggregationInput";
import { MovieStudioScalarWhereWithAggregatesInput } from "../../../inputs/MovieStudioScalarWhereWithAggregatesInput";
import { MovieStudioWhereInput } from "../../../inputs/MovieStudioWhereInput";
import { MovieStudioScalarFieldEnum } from "../../../../enums/MovieStudioScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieStudioArgs {
  @TypeGraphQL.Field(_type => MovieStudioWhereInput, {
    nullable: true
  })
  where?: MovieStudioWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovieStudioOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name">;

  @TypeGraphQL.Field(_type => MovieStudioScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovieStudioScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
