import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieRatingArgs } from "./args/AggregateMovieRatingArgs";
import { MovieRating } from "../../../models/MovieRating";
import { AggregateMovieRating } from "../../outputs/AggregateMovieRating";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieRating)
export class AggregateMovieRatingResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieRating, {
    nullable: false
  })
  async aggregateMovieRating(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateMovieRatingArgs) args: AggregateMovieRatingArgs): Promise<AggregateMovieRating> {
    return getPrismaFromContext(ctx).movieRating.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
