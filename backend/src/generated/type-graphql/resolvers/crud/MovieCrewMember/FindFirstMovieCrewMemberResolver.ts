import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieCrewMemberArgs } from "./args/FindFirstMovieCrewMemberArgs";
import { MovieCrewMember } from "../../../models/MovieCrewMember";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieCrewMember)
export class FindFirstMovieCrewMemberResolver {
  @TypeGraphQL.Query(_returns => MovieCrewMember, {
    nullable: true
  })
  async findFirstMovieCrewMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovieCrewMemberArgs) args: FindFirstMovieCrewMemberArgs): Promise<MovieCrewMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
