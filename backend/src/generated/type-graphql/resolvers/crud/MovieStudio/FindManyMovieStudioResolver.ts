import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMovieStudioArgs } from "./args/FindManyMovieStudioArgs";
import { MovieStudio } from "@/generated/type-graphql/models/MovieStudio";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieStudio)
export class FindManyMovieStudioResolver {
  @TypeGraphQL.Query((_returns) => [MovieStudio], {
    nullable: false,
  })
  async movieStudios(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindManyMovieStudioArgs)
    args: FindManyMovieStudioArgs,
  ): Promise<MovieStudio[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
