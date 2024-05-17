import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListStatsOrderByWithRelationInput } from "../../../inputs/MovieListStatsOrderByWithRelationInput";
import { MovieListStatsWhereInput } from "../../../inputs/MovieListStatsWhereInput";
import { MovieListStatsWhereUniqueInput } from "../../../inputs/MovieListStatsWhereUniqueInput";
import { MovieListStatsScalarFieldEnum } from "../../../../enums/MovieListStatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMovieListStatsArgs {
  @TypeGraphQL.Field((_type) => MovieListStatsWhereInput, {
    nullable: true,
  })
  where?: MovieListStatsWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MovieListStatsOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: MovieListStatsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => MovieListStatsWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MovieListStatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [MovieListStatsScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        "id" | "createdAt" | "updatedAt" | "views" | "likes" | "movieListId"
      >
    | undefined;
}
