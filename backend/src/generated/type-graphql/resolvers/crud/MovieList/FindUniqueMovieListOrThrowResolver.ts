import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieListOrThrowArgs } from "./args/FindUniqueMovieListOrThrowArgs";
import { MovieList } from "../../../models/MovieList";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieList)
export class FindUniqueMovieListOrThrowResolver {
  @TypeGraphQL.Query(_returns => MovieList, {
    nullable: true
  })
  async getMovieList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieListOrThrowArgs): Promise<MovieList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieList.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
