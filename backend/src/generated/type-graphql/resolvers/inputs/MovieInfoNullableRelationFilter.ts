import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieInfoWhereInput } from "../inputs/MovieInfoWhereInput";

@TypeGraphQL.InputType("MovieInfoNullableRelationFilter", {})
export class MovieInfoNullableRelationFilter {
  @TypeGraphQL.Field((_type) => MovieInfoWhereInput, {
    nullable: true,
  })
  is?: MovieInfoWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieInfoWhereInput, {
    nullable: true,
  })
  isNot?: MovieInfoWhereInput | undefined;
}
