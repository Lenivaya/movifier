import { NonEmptyArray } from "type-graphql";
import {
  MovieReviewCrudResolver,
  MovieReviewRelationsResolver,
} from "@/generated/type-graphql";

export const movieReviewResolvers: NonEmptyArray<Function> = [
  MovieReviewCrudResolver,
  MovieReviewRelationsResolver,
];
