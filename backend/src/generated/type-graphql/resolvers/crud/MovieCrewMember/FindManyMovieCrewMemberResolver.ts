import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMovieCrewMemberArgs } from "./args/FindManyMovieCrewMemberArgs";
import { MovieCrewMember } from "../../../models/MovieCrewMember";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieCrewMember)
export class FindManyMovieCrewMemberResolver {
  @TypeGraphQL.Query(_returns => [MovieCrewMember], {
    nullable: false
  })
  async movieCrewMembers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindManyMovieCrewMemberArgs) args: FindManyMovieCrewMemberArgs): Promise<MovieCrewMember[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
