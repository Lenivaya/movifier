import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieListLikedByUserArgs } from "./args/FindFirstMovieListLikedByUserArgs";
import { MovieListLikedByUser } from "../../../models/MovieListLikedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieListLikedByUser)
export class FindFirstMovieListLikedByUserResolver {
  @TypeGraphQL.Query(_returns => MovieListLikedByUser, {
    nullable: true
  })
  async findFirstMovieListLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieListLikedByUserArgs): Promise<MovieListLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListLikedByUser.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
