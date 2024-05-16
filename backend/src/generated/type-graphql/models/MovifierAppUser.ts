import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "./Movie";
import { MovieList } from "./MovieList";
import { MovieListComment } from "./MovieListComment";
import { MovieRating } from "./MovieRating";
import { MoviefireAppUserRole } from "../enums/MoviefireAppUserRole";
import { MovifierAppUserCount } from "../resolvers/outputs/MovifierAppUserCount";

@TypeGraphQL.ObjectType("MovifierAppUser", {})
export class MovifierAppUser {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  username!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  password_hash!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => MoviefireAppUserRole, {
    nullable: false,
  })
  role!: "USER" | "ADMIN";

  watchlist?: Movie[];

  rating?: MovieRating[];

  movieLists?: MovieList[];

  movieListsComments?: MovieListComment[];

  @TypeGraphQL.Field((_type) => MovifierAppUserCount, {
    nullable: true,
  })
  _count?: MovifierAppUserCount | null;
}
