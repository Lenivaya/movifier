import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieRatingUpdateInput } from "../../../inputs/MovieRatingUpdateInput";
import { MovieRatingWhereUniqueInput } from "../../../inputs/MovieRatingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieRatingArgs {
  @TypeGraphQL.Field(_type => MovieRatingUpdateInput, {
    nullable: false
  })
  data!: MovieRatingUpdateInput;

  @TypeGraphQL.Field(_type => MovieRatingWhereUniqueInput, {
    nullable: false
  })
  where!: MovieRatingWhereUniqueInput;
}
