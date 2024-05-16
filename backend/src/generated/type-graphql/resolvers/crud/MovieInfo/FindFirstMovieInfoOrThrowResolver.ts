import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieInfoOrThrowArgs } from "./args/FindFirstMovieInfoOrThrowArgs";
import { MovieInfo } from "@/generated/type-graphql/models/MovieInfo";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieInfo)
export class FindFirstMovieInfoOrThrowResolver {
  @TypeGraphQL.Query((_returns) => MovieInfo, {
    nullable: true,
  })
  async findFirstMovieInfoOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieInfoOrThrowArgs)
    args: FindFirstMovieInfoOrThrowArgs,
  ): Promise<MovieInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
