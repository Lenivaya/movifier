import { NonEmptyArray } from "type-graphql";
import {
  MovieCrudResolver,
  MovieRelationsResolver,
} from "@/generated/type-graphql";

export const moviesResolvers: NonEmptyArray<Function> = [
  MovieCrudResolver,
  MovieRelationsResolver,
];
