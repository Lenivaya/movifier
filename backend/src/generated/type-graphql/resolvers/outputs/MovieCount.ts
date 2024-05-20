import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCountCrewMembersArgs } from "./args/MovieCountCrewMembersArgs";
import { MovieCountGenresArgs } from "./args/MovieCountGenresArgs";
import { MovieCountInWatchlistByUsersArgs } from "./args/MovieCountInWatchlistByUsersArgs";
import { MovieCountKeywordCategoriesArgs } from "./args/MovieCountKeywordCategoriesArgs";
import { MovieCountMovieListsArgs } from "./args/MovieCountMovieListsArgs";
import { MovieCountRatingsArgs } from "./args/MovieCountRatingsArgs";
import { MovieCountSpokenLanguagesArgs } from "./args/MovieCountSpokenLanguagesArgs";
import { MovieCountStudiosArgs } from "./args/MovieCountStudiosArgs";

@TypeGraphQL.ObjectType("MovieCount", {})
export class MovieCount {
  crewMembers!: number;
  studios!: number;
  genres!: number;
  keywordCategories!: number;
  ratings!: number;
  movieLists!: number;
  inWatchlistByUsers!: number;
  spokenLanguages!: number;

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
    name: "ratings",
    nullable: false
  })
  getRatings(@TypeGraphQL.Root() root: MovieCount, @TypeGraphQL.Args() args: MovieCountRatingsArgs): number {
    return root.ratings;
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
}
