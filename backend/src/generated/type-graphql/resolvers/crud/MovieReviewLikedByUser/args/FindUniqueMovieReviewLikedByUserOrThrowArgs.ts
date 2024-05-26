import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikedByUserWhereUniqueInput } from "../../../inputs/MovieReviewLikedByUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMovieReviewLikedByUserOrThrowArgs {
  @TypeGraphQL.Field(_type => MovieReviewLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikedByUserWhereUniqueInput;
}
