import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Genre } from "../models/Genre";
import { MovieCrewMemberOnMovie } from "../models/MovieCrewMemberOnMovie";
import { MovieInfo } from "../models/MovieInfo";
import { MovieKeywordCategory } from "../models/MovieKeywordCategory";
import { MovieLikedByUser } from "../models/MovieLikedByUser";
import { MovieList } from "../models/MovieList";
import { MovieRating } from "../models/MovieRating";
import { MovieSpokenLanguage } from "../models/MovieSpokenLanguage";
import { MovieStats } from "../models/MovieStats";
import { MovieStudio } from "../models/MovieStudio";
import { MovieWatchedByUser } from "../models/MovieWatchedByUser";
import { MovifierAppUser } from "../models/MovifierAppUser";
import { MovieCount } from "../resolvers/outputs/MovieCount";

@TypeGraphQL.ObjectType("Movie", {})
export class Movie {
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

  movieInfo?: MovieInfo | null;

  movieStats?: MovieStats | null;

  crewMembers?: MovieCrewMemberOnMovie[];

  studios?: MovieStudio[];

  genres?: Genre[];

  keywordCategories?: MovieKeywordCategory[];

  ratedBy?: MovieRating[];

  movieLists?: MovieList[];

  inWatchlistByUsers?: MovifierAppUser[];

  spokenLanguages?: MovieSpokenLanguage[];

  watchedBy?: MovieWatchedByUser[];

  likedBy?: MovieLikedByUser[];

  @TypeGraphQL.Field(_type => MovieCount, {
    nullable: true
  })
  _count?: MovieCount | null;
}
