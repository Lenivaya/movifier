import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieRatingWhereUniqueInput } from "../../../inputs/MovieRatingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMovieRatingArgs {
  @TypeGraphQL.Field(_type => MovieRatingWhereUniqueInput, {
    nullable: false
  })
  where!: MovieRatingWhereUniqueInput;
}
