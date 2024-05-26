import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingCreateNestedOneWithoutReviewInput } from "../inputs/MovieRatingCreateNestedOneWithoutReviewInput";

@TypeGraphQL.InputType("MovieReviewCreateWithoutLikedByInput", {})
export class MovieReviewCreateWithoutLikedByInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => MovieRatingCreateNestedOneWithoutReviewInput, {
    nullable: false
  })
  rating!: MovieRatingCreateNestedOneWithoutReviewInput;
}
