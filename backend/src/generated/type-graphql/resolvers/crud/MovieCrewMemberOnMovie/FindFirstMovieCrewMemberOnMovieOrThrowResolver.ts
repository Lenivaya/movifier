import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieCrewMemberOnMovieOrThrowArgs } from "./args/FindFirstMovieCrewMemberOnMovieOrThrowArgs";
import { MovieCrewMemberOnMovie } from "../../../models/MovieCrewMemberOnMovie";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieCrewMemberOnMovie)
export class FindFirstMovieCrewMemberOnMovieOrThrowResolver {
  @TypeGraphQL.Query((_returns) => MovieCrewMemberOnMovie, {
    nullable: true,
  })
  async findFirstMovieCrewMemberOnMovieOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieCrewMemberOnMovieOrThrowArgs)
    args: FindFirstMovieCrewMemberOnMovieOrThrowArgs,
  ): Promise<MovieCrewMemberOnMovie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
