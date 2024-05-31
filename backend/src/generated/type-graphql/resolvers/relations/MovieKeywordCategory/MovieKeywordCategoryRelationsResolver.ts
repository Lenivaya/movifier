import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Movie } from "../../../models/Movie";
import { MovieKeywordCategory } from "../../../models/MovieKeywordCategory";
import { MovieKeywordCategoryMoviesArgs } from "./args/MovieKeywordCategoryMoviesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieKeywordCategory)
export class MovieKeywordCategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Movie], {
    nullable: false
  })
  async movies(@TypeGraphQL.Root() movieKeywordCategory: MovieKeywordCategory, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieKeywordCategoryMoviesArgs): Promise<Movie[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.findUniqueOrThrow({
      where: {
        id: movieKeywordCategory.id,
      },
    }).movies({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
