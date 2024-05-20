import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "../models/Movie";
import { MovieReview } from "../models/MovieReview";
import { MovifierAppUser } from "../models/MovifierAppUser";

@TypeGraphQL.ObjectType("MovieRating", {})
export class MovieRating {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  Review?: MovieReview | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  movieId!: string;

  movie?: Movie;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  user?: MovifierAppUser;
}
