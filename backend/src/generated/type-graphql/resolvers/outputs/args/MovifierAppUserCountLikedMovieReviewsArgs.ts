import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikedByUserWhereInput } from "../../inputs/MovieReviewLikedByUserWhereInput";

@TypeGraphQL.ArgsType()
export class MovifierAppUserCountLikedMovieReviewsArgs {
  @TypeGraphQL.Field(_type => MovieReviewLikedByUserWhereInput, {
    nullable: true
  })
  where?: MovieReviewLikedByUserWhereInput | undefined;
}
