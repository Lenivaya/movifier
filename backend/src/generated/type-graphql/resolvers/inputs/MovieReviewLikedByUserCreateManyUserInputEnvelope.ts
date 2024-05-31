import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserCreateManyUserInput } from "../inputs/MovieReviewLikedByUserCreateManyUserInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserCreateManyUserInputEnvelope", {})
export class MovieReviewLikedByUserCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserCreateManyUserInput], {
    nullable: false
  })
  data!: MovieReviewLikedByUserCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
