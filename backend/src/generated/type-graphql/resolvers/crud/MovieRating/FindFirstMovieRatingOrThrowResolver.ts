import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieRatingOrThrowArgs } from "./args/FindFirstMovieRatingOrThrowArgs";
import { MovieRating } from "../../../models/MovieRating";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieRating)
export class FindFirstMovieRatingOrThrowResolver {
  @TypeGraphQL.Query(_returns => MovieRating, {
    nullable: true
  })
  async findFirstMovieRatingOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovieRatingOrThrowArgs) args: FindFirstMovieRatingOrThrowArgs): Promise<MovieRating | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
