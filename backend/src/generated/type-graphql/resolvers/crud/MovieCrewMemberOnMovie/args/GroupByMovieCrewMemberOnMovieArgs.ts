import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberOnMovieOrderByWithAggregationInput } from "../../../inputs/MovieCrewMemberOnMovieOrderByWithAggregationInput";
import { MovieCrewMemberOnMovieScalarWhereWithAggregatesInput } from "../../../inputs/MovieCrewMemberOnMovieScalarWhereWithAggregatesInput";
import { MovieCrewMemberOnMovieWhereInput } from "../../../inputs/MovieCrewMemberOnMovieWhereInput";
import { MovieCrewMemberOnMovieScalarFieldEnum } from "../../../../enums/MovieCrewMemberOnMovieScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieCrewMemberOnMovieArgs {
  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieWhereInput, {
    nullable: true
  })
  where?: MovieCrewMemberOnMovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovieCrewMemberOnMovieOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"createdAt" | "updatedAt" | "movieId" | "movieCrewMemberId" | "movieCrewMemberTypeId">;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovieCrewMemberOnMovieScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
