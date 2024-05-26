import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikedByUserCreateInput } from "../../../inputs/MovieReviewLikedByUserCreateInput";
import { MovieReviewLikedByUserUpdateInput } from "../../../inputs/MovieReviewLikedByUserUpdateInput";
import { MovieReviewLikedByUserWhereUniqueInput } from "../../../inputs/MovieReviewLikedByUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieReviewLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieReviewLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserCreateInput, {
    nullable: false
  })
  create!: MovieReviewLikedByUserCreateInput;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserUpdateInput, {
    nullable: false
  })
  update!: MovieReviewLikedByUserUpdateInput;
}
