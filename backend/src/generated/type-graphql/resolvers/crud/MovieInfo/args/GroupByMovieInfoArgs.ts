import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieInfoOrderByWithAggregationInput } from "../../../inputs/MovieInfoOrderByWithAggregationInput";
import { MovieInfoScalarWhereWithAggregatesInput } from "../../../inputs/MovieInfoScalarWhereWithAggregatesInput";
import { MovieInfoWhereInput } from "../../../inputs/MovieInfoWhereInput";
import { MovieInfoScalarFieldEnum } from "../../../../enums/MovieInfoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieInfoArgs {
  @TypeGraphQL.Field((_type) => MovieInfoWhereInput, {
    nullable: true,
  })
  where?: MovieInfoWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MovieInfoOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: MovieInfoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieInfoScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
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
  >;

  @TypeGraphQL.Field((_type) => MovieInfoScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: MovieInfoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
