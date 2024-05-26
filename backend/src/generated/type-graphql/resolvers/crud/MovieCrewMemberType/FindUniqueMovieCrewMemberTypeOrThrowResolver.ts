import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieCrewMemberTypeOrThrowArgs } from "./args/FindUniqueMovieCrewMemberTypeOrThrowArgs";
import { MovieCrewMemberType } from "../../../models/MovieCrewMemberType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieCrewMemberType)
export class FindUniqueMovieCrewMemberTypeOrThrowResolver {
  @TypeGraphQL.Query(_returns => MovieCrewMemberType, {
    nullable: true
  })
  async getMovieCrewMemberType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieCrewMemberTypeOrThrowArgs): Promise<MovieCrewMemberType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
