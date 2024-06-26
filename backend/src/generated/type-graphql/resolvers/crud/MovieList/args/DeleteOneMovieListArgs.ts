import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListWhereUniqueInput } from "../../../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMovieListArgs {
  @TypeGraphQL.Field(_type => MovieListWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListWhereUniqueInput;
}
