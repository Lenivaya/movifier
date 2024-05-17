import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberOrderByWithRelationInput } from "../../../inputs/MovieCrewMemberOrderByWithRelationInput";
import { MovieCrewMemberWhereInput } from "../../../inputs/MovieCrewMemberWhereInput";
import { MovieCrewMemberWhereUniqueInput } from "../../../inputs/MovieCrewMemberWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMovieCrewMemberArgs {
  @TypeGraphQL.Field((_type) => MovieCrewMemberWhereInput, {
    nullable: true,
  })
  where?: MovieCrewMemberWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: MovieCrewMemberOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MovieCrewMemberWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
