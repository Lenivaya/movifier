import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieSpokenLanguageOrThrowArgs } from "./args/FindUniqueMovieSpokenLanguageOrThrowArgs";
import { MovieSpokenLanguage } from "../../../models/MovieSpokenLanguage";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieSpokenLanguage)
export class FindUniqueMovieSpokenLanguageOrThrowResolver {
  @TypeGraphQL.Query(_returns => MovieSpokenLanguage, {
    nullable: true
  })
  async getMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieSpokenLanguageOrThrowArgs) args: FindUniqueMovieSpokenLanguageOrThrowArgs): Promise<MovieSpokenLanguage | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
