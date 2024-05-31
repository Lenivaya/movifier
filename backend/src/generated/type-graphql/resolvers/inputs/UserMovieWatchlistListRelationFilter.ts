import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserMovieWatchlistWhereInput } from "../inputs/UserMovieWatchlistWhereInput";

@TypeGraphQL.InputType("UserMovieWatchlistListRelationFilter", {})
export class UserMovieWatchlistListRelationFilter {
  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereInput, {
    nullable: true
  })
  every?: UserMovieWatchlistWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereInput, {
    nullable: true
  })
  some?: UserMovieWatchlistWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereInput, {
    nullable: true
  })
  none?: UserMovieWatchlistWhereInput | undefined;
}
