import { NonEmptyArray } from "type-graphql";
import { moviesResolvers } from "@/graphql/movies/movieResolvers";

export const resolvers: NonEmptyArray<Function> = [...moviesResolvers];
