import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMovieInfoArgs } from "./args/FindManyMovieInfoArgs";
import { MovieInfo } from "../../../models/MovieInfo";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieInfo)
export class FindManyMovieInfoResolver {
  @TypeGraphQL.Query((_returns) => [MovieInfo], {
    nullable: false,
  })
  async movieInfos(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindManyMovieInfoArgs)
    args: FindManyMovieInfoArgs,
  ): Promise<MovieInfo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
