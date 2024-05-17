import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Movie } from "../../../models/Movie";
import { MovieStudio } from "../../../models/MovieStudio";
import { MovieStudioMoviesArgs } from "./args/MovieStudioMoviesArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieStudio)
export class MovieStudioRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Movie], {
    nullable: false,
  })
  async movies(
    @TypeGraphQL.Root() movieStudio: MovieStudio,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieStudioMoviesArgs)
    args: MovieStudioMoviesArgs,
  ): Promise<Movie[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movieStudio.findUniqueOrThrow({
        where: {
          id: movieStudio.id,
        },
      })
      .movies({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
