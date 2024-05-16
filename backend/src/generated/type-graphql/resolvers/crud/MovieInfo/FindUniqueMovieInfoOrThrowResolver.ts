import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieInfoOrThrowArgs } from "./args/FindUniqueMovieInfoOrThrowArgs";
import { MovieInfo } from "@/generated/type-graphql/models/MovieInfo";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieInfo)
export class FindUniqueMovieInfoOrThrowResolver {
  @TypeGraphQL.Query((_returns) => MovieInfo, {
    nullable: true,
  })
  async getMovieInfo(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieInfoOrThrowArgs)
    args: FindUniqueMovieInfoOrThrowArgs,
  ): Promise<MovieInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
