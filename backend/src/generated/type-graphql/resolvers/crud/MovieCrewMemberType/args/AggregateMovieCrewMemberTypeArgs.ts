import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput";
import { MovieCrewMemberTypeWhereInput } from "../../../inputs/MovieCrewMemberTypeWhereInput";
import { MovieCrewMemberTypeWhereUniqueInput } from "../../../inputs/MovieCrewMemberTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMovieCrewMemberTypeArgs {
  @TypeGraphQL.Field((_type) => MovieCrewMemberTypeWhereInput, {
    nullable: true,
  })
  where?: MovieCrewMemberTypeWhereInput | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?:
    | MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberTypeWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MovieCrewMemberTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
