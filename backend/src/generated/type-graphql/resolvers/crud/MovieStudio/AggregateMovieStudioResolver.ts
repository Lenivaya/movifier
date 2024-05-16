import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieStudioArgs } from "./args/AggregateMovieStudioArgs";
import { MovieStudio } from "@/generated/type-graphql/models/MovieStudio";
import { AggregateMovieStudio } from "../../outputs/AggregateMovieStudio";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieStudio)
export class AggregateMovieStudioResolver {
  @TypeGraphQL.Query((_returns) => AggregateMovieStudio, {
    nullable: false,
  })
  async aggregateMovieStudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => AggregateMovieStudioArgs)
    args: AggregateMovieStudioArgs,
  ): Promise<AggregateMovieStudio> {
    return getPrismaFromContext(ctx).movieStudio.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
