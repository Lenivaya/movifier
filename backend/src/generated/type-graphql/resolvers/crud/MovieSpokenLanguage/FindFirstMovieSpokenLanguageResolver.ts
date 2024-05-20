import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieSpokenLanguageArgs } from "./args/FindFirstMovieSpokenLanguageArgs";
import { MovieSpokenLanguage } from "../../../models/MovieSpokenLanguage";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieSpokenLanguage)
export class FindFirstMovieSpokenLanguageResolver {
  @TypeGraphQL.Query(_returns => MovieSpokenLanguage, {
    nullable: true
  })
  async findFirstMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovieSpokenLanguageArgs) args: FindFirstMovieSpokenLanguageArgs): Promise<MovieSpokenLanguage | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
