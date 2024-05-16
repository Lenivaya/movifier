import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Movie } from "@/generated/type-graphql/models/Movie";
import { MovieSpokenLanguage } from "@/generated/type-graphql/models/MovieSpokenLanguage";
import { MovieSpokenLanguageMoviesArgs } from "./args/MovieSpokenLanguageMoviesArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieSpokenLanguage)
export class MovieSpokenLanguageRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Movie], {
    nullable: false,
  })
  async movies(
    @TypeGraphQL.Root() movieSpokenLanguage: MovieSpokenLanguage,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieSpokenLanguageMoviesArgs)
    args: MovieSpokenLanguageMoviesArgs,
  ): Promise<Movie[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movieSpokenLanguage.findUniqueOrThrow({
        where: {
          language: movieSpokenLanguage.language,
        },
      })
      .movies({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
