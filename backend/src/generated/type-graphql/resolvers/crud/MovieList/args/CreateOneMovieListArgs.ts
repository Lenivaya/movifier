import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListCreateInput } from "../../../inputs/MovieListCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieListArgs {
  @TypeGraphQL.Field(_type => MovieListCreateInput, {
    nullable: false
  })
  data!: MovieListCreateInput;
}
