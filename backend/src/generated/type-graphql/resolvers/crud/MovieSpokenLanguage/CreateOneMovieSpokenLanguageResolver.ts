import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMovieSpokenLanguageArgs } from "./args/CreateOneMovieSpokenLanguageArgs";
import { MovieSpokenLanguage } from "../../../models/MovieSpokenLanguage";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieSpokenLanguage)
export class CreateOneMovieSpokenLanguageResolver {
  @TypeGraphQL.Mutation(_returns => MovieSpokenLanguage, {
    nullable: false
  })
  async createOneMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateOneMovieSpokenLanguageArgs) args: CreateOneMovieSpokenLanguageArgs): Promise<MovieSpokenLanguage> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
