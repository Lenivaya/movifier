import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieInfoOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieInfoOrderByWithRelationAndSearchRelevanceInput";
import { MovieInfoWhereInput } from "../../../inputs/MovieInfoWhereInput";
import { MovieInfoWhereUniqueInput } from "../../../inputs/MovieInfoWhereUniqueInput";
import { MovieInfoScalarFieldEnum } from "../../../../enums/MovieInfoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMovieInfoArgs {
  @TypeGraphQL.Field((_type) => MovieInfoWhereInput, {
    nullable: true,
  })
  where?: MovieInfoWhereInput | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieInfoOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: MovieInfoOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field((_type) => MovieInfoWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MovieInfoWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [MovieInfoScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | "id"
        | "createdAt"
        | "updatedAt"
        | "imdbId"
        | "title"
        | "description"
        | "alternativeTitles"
        | "durationInMinutes"
        | "posterUrl"
        | "movieId"
      >
    | undefined;
}
