import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListCreateInput } from "../../../inputs/MovieListCreateInput";
import { MovieListUpdateInput } from "../../../inputs/MovieListUpdateInput";
import { MovieListWhereUniqueInput } from "../../../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieListArgs {
  @TypeGraphQL.Field((_type) => MovieListWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieListWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieListCreateInput, {
    nullable: false,
  })
  create!: MovieListCreateInput;

  @TypeGraphQL.Field((_type) => MovieListUpdateInput, {
    nullable: false,
  })
  update!: MovieListUpdateInput;
}
