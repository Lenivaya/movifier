import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMovieInfoArgs } from "./args/UpsertOneMovieInfoArgs";
import { MovieInfo } from "../../../models/MovieInfo";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieInfo)
export class UpsertOneMovieInfoResolver {
  @TypeGraphQL.Mutation((_returns) => MovieInfo, {
    nullable: false,
  })
  async upsertOneMovieInfo(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpsertOneMovieInfoArgs)
    args: UpsertOneMovieInfoArgs,
  ): Promise<MovieInfo> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
