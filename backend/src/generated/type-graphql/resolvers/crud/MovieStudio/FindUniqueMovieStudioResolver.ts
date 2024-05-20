import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieStudioArgs } from "./args/FindUniqueMovieStudioArgs";
import { MovieStudio } from "../../../models/MovieStudio";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieStudio)
export class FindUniqueMovieStudioResolver {
  @TypeGraphQL.Query(_returns => MovieStudio, {
    nullable: true
  })
  async movieStudio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieStudioArgs) args: FindUniqueMovieStudioArgs): Promise<MovieStudio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
