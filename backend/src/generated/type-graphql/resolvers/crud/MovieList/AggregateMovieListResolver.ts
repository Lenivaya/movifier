import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieListArgs } from "./args/AggregateMovieListArgs";
import { MovieList } from "../../../models/MovieList";
import { AggregateMovieList } from "../../outputs/AggregateMovieList";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieList)
export class AggregateMovieListResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieList, {
    nullable: false
  })
  async aggregateMovieList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateMovieListArgs) args: AggregateMovieListArgs): Promise<AggregateMovieList> {
    return getPrismaFromContext(ctx).movieList.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
