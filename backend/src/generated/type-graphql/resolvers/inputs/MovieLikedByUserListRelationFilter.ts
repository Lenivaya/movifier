import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserWhereInput } from "../inputs/MovieLikedByUserWhereInput";

@TypeGraphQL.InputType("MovieLikedByUserListRelationFilter", {})
export class MovieLikedByUserListRelationFilter {
  @TypeGraphQL.Field(_type => MovieLikedByUserWhereInput, {
    nullable: true
  })
  every?: MovieLikedByUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserWhereInput, {
    nullable: true
  })
  some?: MovieLikedByUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserWhereInput, {
    nullable: true
  })
  none?: MovieLikedByUserWhereInput | undefined;
}
