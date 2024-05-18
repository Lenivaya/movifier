import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListOrderByWithRelationInput } from "../../../inputs/MovieListOrderByWithRelationInput";
import { MovieListWhereInput } from "../../../inputs/MovieListWhereInput";
import { MovieListWhereUniqueInput } from "../../../inputs/MovieListWhereUniqueInput";
import { MovieListScalarFieldEnum } from "../../../../enums/MovieListScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class MovieMovieListsArgs {
  @TypeGraphQL.Field((_type) => MovieListWhereInput, {
    nullable: true,
  })
  where?: MovieListWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MovieListOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: MovieListOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => MovieListWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MovieListWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [MovieListScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<"id" | "createdAt" | "updatedAt" | "name" | "userId">
    | undefined;
}