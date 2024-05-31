import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "../models/Movie";

@TypeGraphQL.ObjectType("MovieInfo", {})
export class MovieInfo {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  imdbId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  alternativeTitles!: string[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  durationInMinutes!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  posterUrl!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  releaseDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  movieId!: string;

  movie?: Movie;
}
