import { NonEmptyArray } from "type-graphql";
import { moviesResolvers } from "@/graphql/movies/movieResolvers";
import { ResolversEnhanceMap } from "@/generated/type-graphql";
import { UseProjection } from "@/graphql/decorators/useProjection";
import { userResolvers } from "@/graphql/users/userResolvers";

export const resolvers: NonEmptyArray<Function> = [
  ...moviesResolvers,
  ...userResolvers,
];

export const resolversEnhanceMap: ResolversEnhanceMap = {
  Movie: {
    movie: [UseProjection()],
    movies: [UseProjection()],
  },
};
