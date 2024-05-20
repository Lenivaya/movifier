import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMovieCrewMemberTypeArgs } from "./args/UpdateOneMovieCrewMemberTypeArgs";
import { MovieCrewMemberType } from "../../../models/MovieCrewMemberType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieCrewMemberType)
export class UpdateOneMovieCrewMemberTypeResolver {
  @TypeGraphQL.Mutation(_returns => MovieCrewMemberType, {
    nullable: true
  })
  async updateOneMovieCrewMemberType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateOneMovieCrewMemberTypeArgs) args: UpdateOneMovieCrewMemberTypeArgs): Promise<MovieCrewMemberType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
