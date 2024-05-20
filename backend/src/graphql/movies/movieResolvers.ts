import { NonEmptyArray } from "type-graphql";
import {
  MovieCrewMemberOnMovieRelationsResolver,
  MovieCrudResolver,
  MovieRelationsResolver,
} from "@/generated/type-graphql";

export const moviesResolvers: NonEmptyArray<Function> = [
  MovieCrudResolver,
  MovieRelationsResolver,
  MovieCrewMemberOnMovieRelationsResolver,
];
