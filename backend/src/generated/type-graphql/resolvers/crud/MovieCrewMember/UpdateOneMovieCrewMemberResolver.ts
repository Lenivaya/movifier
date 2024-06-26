import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMovieCrewMemberArgs } from "./args/UpdateOneMovieCrewMemberArgs";
import { MovieCrewMember } from "../../../models/MovieCrewMember";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieCrewMember)
export class UpdateOneMovieCrewMemberResolver {
  @TypeGraphQL.Mutation(_returns => MovieCrewMember, {
    nullable: true
  })
  async updateOneMovieCrewMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMovieCrewMemberArgs): Promise<MovieCrewMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
