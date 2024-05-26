import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMovieRatingArgs } from "./args/UpsertOneMovieRatingArgs";
import { MovieRating } from "../../../models/MovieRating";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieRating)
export class UpsertOneMovieRatingResolver {
  @TypeGraphQL.Mutation(_returns => MovieRating, {
    nullable: false
  })
  async upsertOneMovieRating(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMovieRatingArgs): Promise<MovieRating> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
