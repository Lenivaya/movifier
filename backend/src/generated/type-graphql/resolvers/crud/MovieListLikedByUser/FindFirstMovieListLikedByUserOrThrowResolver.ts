import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieListLikedByUserOrThrowArgs } from "./args/FindFirstMovieListLikedByUserOrThrowArgs";
import { MovieListLikedByUser } from "../../../models/MovieListLikedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieListLikedByUser)
export class FindFirstMovieListLikedByUserOrThrowResolver {
  @TypeGraphQL.Query(_returns => MovieListLikedByUser, {
    nullable: true
  })
  async findFirstMovieListLikedByUserOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieListLikedByUserOrThrowArgs): Promise<MovieListLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListLikedByUser.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
