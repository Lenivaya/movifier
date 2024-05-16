import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieRatingCreateInput } from "../../../inputs/MovieRatingCreateInput";
import { MovieRatingUpdateInput } from "../../../inputs/MovieRatingUpdateInput";
import { MovieRatingWhereUniqueInput } from "../../../inputs/MovieRatingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieRatingArgs {
  @TypeGraphQL.Field((_type) => MovieRatingWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieRatingWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieRatingCreateInput, {
    nullable: false,
  })
  create!: MovieRatingCreateInput;

  @TypeGraphQL.Field((_type) => MovieRatingUpdateInput, {
    nullable: false,
  })
  update!: MovieRatingUpdateInput;
}
