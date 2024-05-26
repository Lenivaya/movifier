import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieListLikedByUserArgs } from "./args/AggregateMovieListLikedByUserArgs";
import { MovieListLikedByUser } from "../../../models/MovieListLikedByUser";
import { AggregateMovieListLikedByUser } from "../../outputs/AggregateMovieListLikedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieListLikedByUser)
export class AggregateMovieListLikedByUserResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieListLikedByUser, {
    nullable: false
  })
  async aggregateMovieListLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovieListLikedByUserArgs): Promise<AggregateMovieListLikedByUser> {
    return getPrismaFromContext(ctx).movieListLikedByUser.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
