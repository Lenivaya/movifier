import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MovieList } from "../models/MovieList";
import { MovifierAppUser } from "../models/MovifierAppUser";

@TypeGraphQL.ObjectType("MovieListComment", {})
export class MovieListComment {
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
  content!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  movieListId!: string;

  movieList?: MovieList;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  user?: MovifierAppUser;
}
