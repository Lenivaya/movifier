import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingWhereInput } from "../inputs/MovieRatingWhereInput";

@TypeGraphQL.InputType("MovieRatingListRelationFilter", {})
export class MovieRatingListRelationFilter {
  @TypeGraphQL.Field((_type) => MovieRatingWhereInput, {
    nullable: true,
  })
  every?: MovieRatingWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingWhereInput, {
    nullable: true,
  })
  some?: MovieRatingWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingWhereInput, {
    nullable: true,
  })
  none?: MovieRatingWhereInput | undefined;
}
