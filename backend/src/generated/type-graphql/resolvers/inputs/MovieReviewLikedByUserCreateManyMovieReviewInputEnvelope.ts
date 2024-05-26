import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserCreateManyMovieReviewInput } from "../inputs/MovieReviewLikedByUserCreateManyMovieReviewInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope", {})
export class MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserCreateManyMovieReviewInput], {
    nullable: false
  })
  data!: MovieReviewLikedByUserCreateManyMovieReviewInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
