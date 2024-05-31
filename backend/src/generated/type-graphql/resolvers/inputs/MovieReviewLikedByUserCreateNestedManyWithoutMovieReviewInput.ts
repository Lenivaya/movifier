import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope } from "../inputs/MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope";
import { MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput } from "../inputs/MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput";
import { MovieReviewLikedByUserCreateWithoutMovieReviewInput } from "../inputs/MovieReviewLikedByUserCreateWithoutMovieReviewInput";
import { MovieReviewLikedByUserWhereUniqueInput } from "../inputs/MovieReviewLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserCreateNestedManyWithoutMovieReviewInput", {})
export class MovieReviewLikedByUserCreateNestedManyWithoutMovieReviewInput {
  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserCreateWithoutMovieReviewInput], {
    nullable: true
  })
  create?: MovieReviewLikedByUserCreateWithoutMovieReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput], {
    nullable: true
  })
  connectOrCreate?: MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope, {
    nullable: true
  })
  createMany?: MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieReviewLikedByUserWhereUniqueInput[] | undefined;
}
