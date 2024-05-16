import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieStudioOrThrowArgs } from "./args/FindUniqueMovieStudioOrThrowArgs";
import { MovieStudio } from "@/generated/type-graphql/models/MovieStudio";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieStudio)
export class FindUniqueMovieStudioOrThrowResolver {
  @TypeGraphQL.Query((_returns) => MovieStudio, {
    nullable: true,
  })
  async getMovieStudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieStudioOrThrowArgs)
    args: FindUniqueMovieStudioOrThrowArgs,
  ): Promise<MovieStudio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
