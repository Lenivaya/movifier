import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCountCrewMembersArgs } from "./args/MovieCountCrewMembersArgs";
import { MovieCountGenresArgs } from "./args/MovieCountGenresArgs";
import { MovieCountInWatchlistByUsersArgs } from "./args/MovieCountInWatchlistByUsersArgs";
import { MovieCountKeywordCategoriesArgs } from "./args/MovieCountKeywordCategoriesArgs";
import { MovieCountLikedByArgs } from "./args/MovieCountLikedByArgs";
import { MovieCountMovieListsArgs } from "./args/MovieCountMovieListsArgs";
import { MovieCountRatedByArgs } from "./args/MovieCountRatedByArgs";
import { MovieCountSpokenLanguagesArgs } from "./args/MovieCountSpokenLanguagesArgs";
import { MovieCountStudiosArgs } from "./args/MovieCountStudiosArgs";
import { MovieCountWatchedByArgs } from "./args/MovieCountWatchedByArgs";

@TypeGraphQL.ObjectType("MovieCount", {})
export class MovieCount {
  crewMembers!: number;
  studios!: number;
  genres!: number;
  keywordCategories!: number;
  ratedBy!: number;
  movieLists!: number;
  inWatchlistByUsers!: number;
  spokenLanguages!: number;
  watchedBy!: number;
  likedBy!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "crewMembers",
    nullable: false
  })
  getCrewMembers(@TypeGraphQL.Root() root: MovieCount, @TypeGraphQL.Args() args: MovieCountCrewMembersArgs): number {
    return root.crewMembers;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "studios",
    nullable: false
  })
  getStudios(@TypeGraphQL.Root() root: MovieCount, @TypeGraphQL.Args() args: MovieCountStudiosArgs): number {
    return root.studios;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "genres",
    nullable: false
  })
  getGenres(@TypeGraphQL.Root() root: MovieCount, @TypeGraphQL.Args() args: MovieCountGenresArgs): number {
    return root.genres;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "keywordCategories",
    nullable: false
  })
  getKeywordCategories(@TypeGraphQL.Root() root: MovieCount, @TypeGraphQL.Args() args: MovieCountKeywordCategoriesArgs): number {
    return root.keywordCategories;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "ratedBy",
    nullable: false
  })
  getRatedBy(@TypeGraphQL.Root() root: MovieCount, @TypeGraphQL.Args() args: MovieCountRatedByArgs): number {
    return root.ratedBy;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "movieLists",
    nullable: false
  })
  getMovieLists(@TypeGraphQL.Root() root: MovieCount, @TypeGraphQL.Args() args: MovieCountMovieListsArgs): number {
    return root.movieLists;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "inWatchlistByUsers",
    nullable: false
  })
  getInWatchlistByUsers(@TypeGraphQL.Root() root: MovieCount, @TypeGraphQL.Args() args: MovieCountInWatchlistByUsersArgs): number {
    return root.inWatchlistByUsers;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "spokenLanguages",
    nullable: false
  })
  getSpokenLanguages(@TypeGraphQL.Root() root: MovieCount, @TypeGraphQL.Args() args: MovieCountSpokenLanguagesArgs): number {
    return root.spokenLanguages;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "watchedBy",
    nullable: false
  })
  getWatchedBy(@TypeGraphQL.Root() root: MovieCount, @TypeGraphQL.Args() args: MovieCountWatchedByArgs): number {
    return root.watchedBy;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "likedBy",
    nullable: false
  })
  getLikedBy(@TypeGraphQL.Root() root: MovieCount, @TypeGraphQL.Args() args: MovieCountLikedByArgs): number {
    return root.likedBy;
  }
}
