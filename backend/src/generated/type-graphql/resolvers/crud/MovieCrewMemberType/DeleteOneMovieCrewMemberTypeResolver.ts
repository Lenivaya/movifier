import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMovieCrewMemberTypeArgs } from "./args/DeleteOneMovieCrewMemberTypeArgs";
import { MovieCrewMemberType } from "../../../models/MovieCrewMemberType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieCrewMemberType)
export class DeleteOneMovieCrewMemberTypeResolver {
  @TypeGraphQL.Mutation(_returns => MovieCrewMemberType, {
    nullable: true
  })
  async deleteOneMovieCrewMemberType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteOneMovieCrewMemberTypeArgs) args: DeleteOneMovieCrewMemberTypeArgs): Promise<MovieCrewMemberType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
