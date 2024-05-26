import { NonEmptyArray } from "type-graphql";
import {
  MovieLikedByUserCrudResolver,
  MovieLikedByUserRelationsResolver,
} from "@/generated/type-graphql";

export const movieLikesResolvers: NonEmptyArray<Function> = [
  MovieLikedByUserCrudResolver,
  MovieLikedByUserRelationsResolver,
];
