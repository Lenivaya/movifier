import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikedByUserUpdateInput } from "../../../inputs/MovieReviewLikedByUserUpdateInput";
import { MovieReviewLikedByUserWhereUniqueInput } from "../../../inputs/MovieReviewLikedByUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieReviewLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieReviewLikedByUserUpdateInput, {
    nullable: false
  })
  data!: MovieReviewLikedByUserUpdateInput;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikedByUserWhereUniqueInput;
}
