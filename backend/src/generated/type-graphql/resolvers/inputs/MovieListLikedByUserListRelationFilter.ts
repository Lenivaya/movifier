import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserWhereInput } from "../inputs/MovieListLikedByUserWhereInput";

@TypeGraphQL.InputType("MovieListLikedByUserListRelationFilter", {})
export class MovieListLikedByUserListRelationFilter {
  @TypeGraphQL.Field(_type => MovieListLikedByUserWhereInput, {
    nullable: true
  })
  every?: MovieListLikedByUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserWhereInput, {
    nullable: true
  })
  some?: MovieListLikedByUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserWhereInput, {
    nullable: true
  })
  none?: MovieListLikedByUserWhereInput | undefined;
}
