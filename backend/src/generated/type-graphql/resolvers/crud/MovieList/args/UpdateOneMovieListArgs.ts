import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListUpdateInput } from "../../../inputs/MovieListUpdateInput";
import { MovieListWhereUniqueInput } from "../../../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieListArgs {
  @TypeGraphQL.Field((_type) => MovieListUpdateInput, {
    nullable: false,
  })
  data!: MovieListUpdateInput;

  @TypeGraphQL.Field((_type) => MovieListWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieListWhereUniqueInput;
}
