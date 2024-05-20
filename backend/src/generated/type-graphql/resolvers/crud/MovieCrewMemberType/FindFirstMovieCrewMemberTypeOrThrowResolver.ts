import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieCrewMemberTypeOrThrowArgs } from "./args/FindFirstMovieCrewMemberTypeOrThrowArgs";
import { MovieCrewMemberType } from "../../../models/MovieCrewMemberType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieCrewMemberType)
export class FindFirstMovieCrewMemberTypeOrThrowResolver {
  @TypeGraphQL.Query(_returns => MovieCrewMemberType, {
    nullable: true
  })
  async findFirstMovieCrewMemberTypeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovieCrewMemberTypeOrThrowArgs) args: FindFirstMovieCrewMemberTypeOrThrowArgs): Promise<MovieCrewMemberType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
