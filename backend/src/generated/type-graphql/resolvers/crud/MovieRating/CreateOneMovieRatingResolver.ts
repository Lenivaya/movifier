import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMovieRatingArgs } from "./args/CreateOneMovieRatingArgs";
import { MovieRating } from "../../../models/MovieRating";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieRating)
export class CreateOneMovieRatingResolver {
  @TypeGraphQL.Mutation((_returns) => MovieRating, {
    nullable: false,
  })
  async createOneMovieRating(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateOneMovieRatingArgs)
    args: CreateOneMovieRatingArgs,
  ): Promise<MovieRating> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
