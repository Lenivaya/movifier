import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieRelationFilter", {})
export class MovieRelationFilter {
  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  is?: MovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  isNot?: MovieWhereInput | undefined;
}
