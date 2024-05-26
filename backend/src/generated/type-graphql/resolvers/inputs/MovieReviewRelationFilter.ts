import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewWhereInput } from "../inputs/MovieReviewWhereInput";

@TypeGraphQL.InputType("MovieReviewRelationFilter", {})
export class MovieReviewRelationFilter {
  @TypeGraphQL.Field(_type => MovieReviewWhereInput, {
    nullable: true
  })
  is?: MovieReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewWhereInput, {
    nullable: true
  })
  isNot?: MovieReviewWhereInput | undefined;
}
