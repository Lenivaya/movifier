import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovieStudioArgs } from "./args/GroupByMovieStudioArgs";
import { MovieStudio } from "@/generated/type-graphql/models/MovieStudio";
import { MovieStudioGroupBy } from "../../outputs/MovieStudioGroupBy";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieStudio)
export class GroupByMovieStudioResolver {
  @TypeGraphQL.Query((_returns) => [MovieStudioGroupBy], {
    nullable: false,
  })
  async groupByMovieStudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => GroupByMovieStudioArgs)
    args: GroupByMovieStudioArgs,
  ): Promise<MovieStudioGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
