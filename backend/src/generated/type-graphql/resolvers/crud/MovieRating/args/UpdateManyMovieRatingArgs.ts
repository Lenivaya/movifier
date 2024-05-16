import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieRatingUpdateManyMutationInput } from "../../../inputs/MovieRatingUpdateManyMutationInput";
import { MovieRatingWhereInput } from "../../../inputs/MovieRatingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieRatingArgs {
  @TypeGraphQL.Field((_type) => MovieRatingUpdateManyMutationInput, {
    nullable: false,
  })
  data!: MovieRatingUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => MovieRatingWhereInput, {
    nullable: true,
  })
  where?: MovieRatingWhereInput | undefined;
}
