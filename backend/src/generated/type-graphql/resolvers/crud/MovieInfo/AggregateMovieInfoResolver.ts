import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieInfoArgs } from "./args/AggregateMovieInfoArgs";
import { MovieInfo } from "../../../models/MovieInfo";
import { AggregateMovieInfo } from "../../outputs/AggregateMovieInfo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieInfo)
export class AggregateMovieInfoResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieInfo, {
    nullable: false
  })
  async aggregateMovieInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateMovieInfoArgs) args: AggregateMovieInfoArgs): Promise<AggregateMovieInfo> {
    return getPrismaFromContext(ctx).movieInfo.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
