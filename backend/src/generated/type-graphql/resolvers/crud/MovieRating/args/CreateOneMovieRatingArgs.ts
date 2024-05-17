import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieRatingCreateInput } from "../../../inputs/MovieRatingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieRatingArgs {
  @TypeGraphQL.Field((_type) => MovieRatingCreateInput, {
    nullable: false,
  })
  data!: MovieRatingCreateInput;
}
