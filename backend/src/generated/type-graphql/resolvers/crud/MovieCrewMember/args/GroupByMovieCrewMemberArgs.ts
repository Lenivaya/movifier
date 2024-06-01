import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberOrderByWithAggregationInput } from "../../../inputs/MovieCrewMemberOrderByWithAggregationInput";
import { MovieCrewMemberScalarWhereWithAggregatesInput } from "../../../inputs/MovieCrewMemberScalarWhereWithAggregatesInput";
import { MovieCrewMemberWhereInput } from "../../../inputs/MovieCrewMemberWhereInput";
import { MovieCrewMemberScalarFieldEnum } from "../../../../enums/MovieCrewMemberScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieCrewMemberArgs {
  @TypeGraphQL.Field(_type => MovieCrewMemberWhereInput, {
    nullable: true
  })
  where?: MovieCrewMemberWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovieCrewMemberOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name" | "photoUrl" | "description" | "popularity" | "imdbId">;

  @TypeGraphQL.Field(_type => MovieCrewMemberScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovieCrewMemberScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
