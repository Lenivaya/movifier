import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikedByUserUpdateManyMutationInput } from "../../../inputs/MovieReviewLikedByUserUpdateManyMutationInput";
import { MovieReviewLikedByUserWhereInput } from "../../../inputs/MovieReviewLikedByUserWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieReviewLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieReviewLikedByUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieReviewLikedByUserUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserWhereInput, {
    nullable: true
  })
  where?: MovieReviewLikedByUserWhereInput | undefined;
}
