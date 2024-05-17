import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieRatingOrThrowArgs } from "./args/FindUniqueMovieRatingOrThrowArgs";
import { MovieRating } from "../../../models/MovieRating";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieRating)
export class FindUniqueMovieRatingOrThrowResolver {
  @TypeGraphQL.Query((_returns) => MovieRating, {
    nullable: true,
  })
  async getMovieRating(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieRatingOrThrowArgs)
    args: FindUniqueMovieRatingOrThrowArgs,
  ): Promise<MovieRating | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
