import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieSpokenLanguageOrThrowArgs } from "./args/FindFirstMovieSpokenLanguageOrThrowArgs";
import { MovieSpokenLanguage } from "../../../models/MovieSpokenLanguage";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieSpokenLanguage)
export class FindFirstMovieSpokenLanguageOrThrowResolver {
  @TypeGraphQL.Query(_returns => MovieSpokenLanguage, {
    nullable: true
  })
  async findFirstMovieSpokenLanguageOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieSpokenLanguageOrThrowArgs): Promise<MovieSpokenLanguage | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
