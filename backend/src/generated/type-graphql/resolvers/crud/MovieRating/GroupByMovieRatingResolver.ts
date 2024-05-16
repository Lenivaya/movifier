import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovieRatingArgs } from "./args/GroupByMovieRatingArgs";
import { MovieRating } from "@/generated/type-graphql/models/MovieRating";
import { MovieRatingGroupBy } from "../../outputs/MovieRatingGroupBy";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieRating)
export class GroupByMovieRatingResolver {
  @TypeGraphQL.Query((_returns) => [MovieRatingGroupBy], {
    nullable: false,
  })
  async groupByMovieRating(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => GroupByMovieRatingArgs)
    args: GroupByMovieRatingArgs,
  ): Promise<MovieRatingGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
