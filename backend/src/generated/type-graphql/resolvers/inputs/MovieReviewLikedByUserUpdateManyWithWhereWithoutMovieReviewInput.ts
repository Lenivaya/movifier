import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserScalarWhereInput } from "../inputs/MovieReviewLikedByUserScalarWhereInput";
import { MovieReviewLikedByUserUpdateManyMutationInput } from "../inputs/MovieReviewLikedByUserUpdateManyMutationInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput", {})
export class MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput {
  @TypeGraphQL.Field(_type => MovieReviewLikedByUserScalarWhereInput, {
    nullable: false
  })
  where!: MovieReviewLikedByUserScalarWhereInput;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieReviewLikedByUserUpdateManyMutationInput;
}
