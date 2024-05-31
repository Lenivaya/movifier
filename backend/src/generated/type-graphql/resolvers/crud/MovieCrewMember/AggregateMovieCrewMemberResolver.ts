import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieCrewMemberArgs } from "./args/AggregateMovieCrewMemberArgs";
import { MovieCrewMember } from "../../../models/MovieCrewMember";
import { AggregateMovieCrewMember } from "../../outputs/AggregateMovieCrewMember";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieCrewMember)
export class AggregateMovieCrewMemberResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieCrewMember, {
    nullable: false
  })
  async aggregateMovieCrewMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovieCrewMemberArgs): Promise<AggregateMovieCrewMember> {
    return getPrismaFromContext(ctx).movieCrewMember.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
