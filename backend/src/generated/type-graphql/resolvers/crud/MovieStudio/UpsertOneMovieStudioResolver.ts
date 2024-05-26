import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMovieStudioArgs } from "./args/UpsertOneMovieStudioArgs";
import { MovieStudio } from "../../../models/MovieStudio";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieStudio)
export class UpsertOneMovieStudioResolver {
  @TypeGraphQL.Mutation(_returns => MovieStudio, {
    nullable: false
  })
  async upsertOneMovieStudio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMovieStudioArgs): Promise<MovieStudio> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
