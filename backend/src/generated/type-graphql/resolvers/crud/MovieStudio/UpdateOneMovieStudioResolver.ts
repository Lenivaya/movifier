import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMovieStudioArgs } from "./args/UpdateOneMovieStudioArgs";
import { MovieStudio } from "../../../models/MovieStudio";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieStudio)
export class UpdateOneMovieStudioResolver {
  @TypeGraphQL.Mutation(_returns => MovieStudio, {
    nullable: true
  })
  async updateOneMovieStudio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMovieStudioArgs): Promise<MovieStudio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
