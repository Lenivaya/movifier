import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "./Movie";
import { MovieListComment } from "./MovieListComment";
import { MovieListStats } from "./MovieListStats";
import { MovifierAppUser } from "./MovifierAppUser";
import { MovieListCount } from "../resolvers/outputs/MovieListCount";

@TypeGraphQL.ObjectType("MovieList", {})
export class MovieList {
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
  name!: string;

  movies?: Movie[];

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  movieListAuthor?: MovifierAppUser;

  MovieListStats?: MovieListStats | null;

  movieListComments?: MovieListComment[];

  @TypeGraphQL.Field((_type) => MovieListCount, {
    nullable: true,
  })
  _count?: MovieListCount | null;
}
