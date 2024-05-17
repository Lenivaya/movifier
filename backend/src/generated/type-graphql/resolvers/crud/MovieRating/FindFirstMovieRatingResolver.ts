import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieRatingArgs } from "./args/FindFirstMovieRatingArgs";
import { MovieRating } from "../../../models/MovieRating";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieRating)
export class FindFirstMovieRatingResolver {
  @TypeGraphQL.Query((_returns) => MovieRating, {
    nullable: true,
  })
  async findFirstMovieRating(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieRatingArgs)
    args: FindFirstMovieRatingArgs,
  ): Promise<MovieRating | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
