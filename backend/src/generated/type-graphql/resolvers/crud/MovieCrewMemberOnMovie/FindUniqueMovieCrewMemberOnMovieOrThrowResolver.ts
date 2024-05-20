import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieCrewMemberOnMovieOrThrowArgs } from "./args/FindUniqueMovieCrewMemberOnMovieOrThrowArgs";
import { MovieCrewMemberOnMovie } from "../../../models/MovieCrewMemberOnMovie";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieCrewMemberOnMovie)
export class FindUniqueMovieCrewMemberOnMovieOrThrowResolver {
  @TypeGraphQL.Query(_returns => MovieCrewMemberOnMovie, {
    nullable: true
  })
  async getMovieCrewMemberOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieCrewMemberOnMovieOrThrowArgs) args: FindUniqueMovieCrewMemberOnMovieOrThrowArgs): Promise<MovieCrewMemberOnMovie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
