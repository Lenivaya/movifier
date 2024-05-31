import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieCrewMemberOnMovieArgs } from "./args/FindUniqueMovieCrewMemberOnMovieArgs";
import { MovieCrewMemberOnMovie } from "../../../models/MovieCrewMemberOnMovie";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieCrewMemberOnMovie)
export class FindUniqueMovieCrewMemberOnMovieResolver {
  @TypeGraphQL.Query(_returns => MovieCrewMemberOnMovie, {
    nullable: true
  })
  async movieCrewMemberOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieCrewMemberOnMovieArgs): Promise<MovieCrewMemberOnMovie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
