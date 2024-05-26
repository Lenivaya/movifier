import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikedByUserCreateManyInput } from "../../../inputs/MovieReviewLikedByUserCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieReviewLikedByUserArgs {
  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserCreateManyInput], {
    nullable: false
  })
  data!: MovieReviewLikedByUserCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
