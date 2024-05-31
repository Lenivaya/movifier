import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikedByUserCreateInput } from "../../../inputs/MovieReviewLikedByUserCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieReviewLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieReviewLikedByUserCreateInput, {
    nullable: false
  })
  data!: MovieReviewLikedByUserCreateInput;
}
