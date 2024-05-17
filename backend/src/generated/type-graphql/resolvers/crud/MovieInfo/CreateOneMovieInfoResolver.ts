import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMovieInfoArgs } from "./args/CreateOneMovieInfoArgs";
import { MovieInfo } from "../../../models/MovieInfo";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieInfo)
export class CreateOneMovieInfoResolver {
  @TypeGraphQL.Mutation((_returns) => MovieInfo, {
    nullable: false,
  })
  async createOneMovieInfo(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateOneMovieInfoArgs)
    args: CreateOneMovieInfoArgs,
  ): Promise<MovieInfo> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
