import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("UserMovieWatchlistScalarWhereInput", {})
export class UserMovieWatchlistScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserMovieWatchlistScalarWhereInput], {
    nullable: true
  })
  AND?: UserMovieWatchlistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistScalarWhereInput], {
    nullable: true
  })
  OR?: UserMovieWatchlistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistScalarWhereInput], {
    nullable: true
  })
  NOT?: UserMovieWatchlistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  movieId?: StringFilter | undefined;
}
