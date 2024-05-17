import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingWhereInput } from "../inputs/MovieRatingWhereInput";

@TypeGraphQL.InputType("MovieRatingRelationFilter", {})
export class MovieRatingRelationFilter {
  @TypeGraphQL.Field((_type) => MovieRatingWhereInput, {
    nullable: true,
  })
  is?: MovieRatingWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingWhereInput, {
    nullable: true,
  })
  isNot?: MovieRatingWhereInput | undefined;
}
