import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Genre } from "./Genre";
import { MovieCrewMember } from "./MovieCrewMember";
import { MovieInfo } from "./MovieInfo";
import { MovieKeywordCategory } from "./MovieKeywordCategory";
import { MovieList } from "./MovieList";
import { MovieRating } from "./MovieRating";
import { MovieSpokenLanguage } from "./MovieSpokenLanguage";
import { MovieStats } from "./MovieStats";
import { MovieStudio } from "./MovieStudio";
import { MovifierAppUser } from "./MovifierAppUser";
import { MovieCount } from "../resolvers/outputs/MovieCount";

@TypeGraphQL.ObjectType("Movie", {})
export class Movie {
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

  movieInfo?: MovieInfo | null;

  MovieStats?: MovieStats | null;

  crewMembers?: MovieCrewMember[];

  studios?: MovieStudio[];

  genres?: Genre[];

  keywordCategories?: MovieKeywordCategory[];

  ratings?: MovieRating[];

  movieLists?: MovieList[];

  inWatchlistByUsers?: MovifierAppUser[];

  spokenLanguages?: MovieSpokenLanguage[];

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  genreName?: string | null;

  @TypeGraphQL.Field((_type) => MovieCount, {
    nullable: true,
  })
  _count?: MovieCount | null;
}
