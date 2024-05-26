import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMovieCrewMemberTypeArgs } from "./args/UpsertOneMovieCrewMemberTypeArgs";
import { MovieCrewMemberType } from "../../../models/MovieCrewMemberType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieCrewMemberType)
export class UpsertOneMovieCrewMemberTypeResolver {
  @TypeGraphQL.Mutation(_returns => MovieCrewMemberType, {
    nullable: false
  })
  async upsertOneMovieCrewMemberType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMovieCrewMemberTypeArgs): Promise<MovieCrewMemberType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
