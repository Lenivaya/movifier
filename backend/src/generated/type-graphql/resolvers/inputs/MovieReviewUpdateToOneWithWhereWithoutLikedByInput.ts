import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewUpdateWithoutLikedByInput } from "../inputs/MovieReviewUpdateWithoutLikedByInput";
import { MovieReviewWhereInput } from "../inputs/MovieReviewWhereInput";

@TypeGraphQL.InputType("MovieReviewUpdateToOneWithWhereWithoutLikedByInput", {})
export class MovieReviewUpdateToOneWithWhereWithoutLikedByInput {
  @TypeGraphQL.Field(_type => MovieReviewWhereInput, {
    nullable: true
  })
  where?: MovieReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewUpdateWithoutLikedByInput, {
    nullable: false
  })
  data!: MovieReviewUpdateWithoutLikedByInput;
}
