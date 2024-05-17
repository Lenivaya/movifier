import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieStudioOrThrowArgs } from "./args/FindFirstMovieStudioOrThrowArgs";
import { MovieStudio } from "../../../models/MovieStudio";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieStudio)
export class FindFirstMovieStudioOrThrowResolver {
  @TypeGraphQL.Query((_returns) => MovieStudio, {
    nullable: true,
  })
  async findFirstMovieStudioOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieStudioOrThrowArgs)
    args: FindFirstMovieStudioOrThrowArgs,
  ): Promise<MovieStudio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
