import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListWhereInput } from "../inputs/MovieListWhereInput";

@TypeGraphQL.InputType("MovieListRelationFilter", {})
export class MovieListRelationFilter {
  @TypeGraphQL.Field(_type => MovieListWhereInput, {
    nullable: true
  })
  is?: MovieListWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieListWhereInput, {
    nullable: true
  })
  isNot?: MovieListWhereInput | undefined;
}
