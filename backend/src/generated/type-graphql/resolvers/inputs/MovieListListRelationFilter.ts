import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListWhereInput } from "../inputs/MovieListWhereInput";

@TypeGraphQL.InputType("MovieListListRelationFilter", {})
export class MovieListListRelationFilter {
  @TypeGraphQL.Field(_type => MovieListWhereInput, {
    nullable: true
  })
  every?: MovieListWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieListWhereInput, {
    nullable: true
  })
  some?: MovieListWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieListWhereInput, {
    nullable: true
  })
  none?: MovieListWhereInput | undefined;
}
