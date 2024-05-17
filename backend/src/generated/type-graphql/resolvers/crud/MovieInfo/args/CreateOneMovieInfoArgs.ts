import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieInfoCreateInput } from "../../../inputs/MovieInfoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieInfoArgs {
  @TypeGraphQL.Field((_type) => MovieInfoCreateInput, {
    nullable: false,
  })
  data!: MovieInfoCreateInput;
}
