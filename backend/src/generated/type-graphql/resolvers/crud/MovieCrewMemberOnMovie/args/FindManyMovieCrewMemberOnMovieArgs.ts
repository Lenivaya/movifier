import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput";
import { MovieCrewMemberOnMovieWhereInput } from "../../../inputs/MovieCrewMemberOnMovieWhereInput";
import { MovieCrewMemberOnMovieWhereUniqueInput } from "../../../inputs/MovieCrewMemberOnMovieWhereUniqueInput";
import { MovieCrewMemberOnMovieScalarFieldEnum } from "../../../../enums/MovieCrewMemberOnMovieScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMovieCrewMemberOnMovieArgs {
  @TypeGraphQL.Field((_type) => MovieCrewMemberOnMovieWhereInput, {
    nullable: true,
  })
  where?: MovieCrewMemberOnMovieWhereInput | undefined;

  @TypeGraphQL.Field(
    (_type) => [
      MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput,
    ],
    {
      nullable: true,
    },
  )
  orderBy?:
    | MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberOnMovieWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MovieCrewMemberOnMovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberOnMovieScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | "createdAt"
        | "updatedAt"
        | "movieId"
        | "movieCrewMemberId"
        | "movieCrewMemberTypeId"
      >
    | undefined;
}
