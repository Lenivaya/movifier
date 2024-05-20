import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieSpokenLanguageArgs } from "./args/AggregateMovieSpokenLanguageArgs";
import { MovieSpokenLanguage } from "../../../models/MovieSpokenLanguage";
import { AggregateMovieSpokenLanguage } from "../../outputs/AggregateMovieSpokenLanguage";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieSpokenLanguage)
export class AggregateMovieSpokenLanguageResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieSpokenLanguage, {
    nullable: false
  })
  async aggregateMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateMovieSpokenLanguageArgs) args: AggregateMovieSpokenLanguageArgs): Promise<AggregateMovieSpokenLanguage> {
    return getPrismaFromContext(ctx).movieSpokenLanguage.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
