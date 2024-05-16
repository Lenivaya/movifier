import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMovieListArgs } from "./args/FindManyMovieListArgs";
import { MovieList } from "@/generated/type-graphql/models/MovieList";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieList)
export class FindManyMovieListResolver {
  @TypeGraphQL.Query((_returns) => [MovieList], {
    nullable: false,
  })
  async movieLists(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindManyMovieListArgs)
    args: FindManyMovieListArgs,
  ): Promise<MovieList[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieList.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
