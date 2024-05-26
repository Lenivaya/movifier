import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserWhereInput } from "../inputs/MovieWatchedByUserWhereInput";

@TypeGraphQL.InputType("MovieWatchedByUserListRelationFilter", {})
export class MovieWatchedByUserListRelationFilter {
  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereInput, {
    nullable: true
  })
  every?: MovieWatchedByUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereInput, {
    nullable: true
  })
  some?: MovieWatchedByUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereInput, {
    nullable: true
  })
  none?: MovieWatchedByUserWhereInput | undefined;
}
