import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMovieInfoArgs } from "./args/UpdateOneMovieInfoArgs";
import { MovieInfo } from "@/generated/type-graphql/models/MovieInfo";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieInfo)
export class UpdateOneMovieInfoResolver {
  @TypeGraphQL.Mutation((_returns) => MovieInfo, {
    nullable: true,
  })
  async updateOneMovieInfo(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpdateOneMovieInfoArgs)
    args: UpdateOneMovieInfoArgs,
  ): Promise<MovieInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
