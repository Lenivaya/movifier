import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberTypeOrderByWithAggregationInput } from "../../../inputs/MovieCrewMemberTypeOrderByWithAggregationInput";
import { MovieCrewMemberTypeScalarWhereWithAggregatesInput } from "../../../inputs/MovieCrewMemberTypeScalarWhereWithAggregatesInput";
import { MovieCrewMemberTypeWhereInput } from "../../../inputs/MovieCrewMemberTypeWhereInput";
import { MovieCrewMemberTypeScalarFieldEnum } from "../../../../enums/MovieCrewMemberTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieCrewMemberTypeArgs {
  @TypeGraphQL.Field((_type) => MovieCrewMemberTypeWhereInput, {
    nullable: true,
  })
  where?: MovieCrewMemberTypeWhereInput | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberTypeOrderByWithAggregationInput],
    {
      nullable: true,
    },
  )
  orderBy?: MovieCrewMemberTypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberTypeScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(
    (_type) => MovieCrewMemberTypeScalarWhereWithAggregatesInput,
    {
      nullable: true,
    },
  )
  having?: MovieCrewMemberTypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
