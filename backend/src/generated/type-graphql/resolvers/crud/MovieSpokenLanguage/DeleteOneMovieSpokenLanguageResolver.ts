import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMovieSpokenLanguageArgs } from "./args/DeleteOneMovieSpokenLanguageArgs";
import { MovieSpokenLanguage } from "../../../models/MovieSpokenLanguage";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieSpokenLanguage)
export class DeleteOneMovieSpokenLanguageResolver {
  @TypeGraphQL.Mutation(_returns => MovieSpokenLanguage, {
    nullable: true
  })
  async deleteOneMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMovieSpokenLanguageArgs): Promise<MovieSpokenLanguage | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
