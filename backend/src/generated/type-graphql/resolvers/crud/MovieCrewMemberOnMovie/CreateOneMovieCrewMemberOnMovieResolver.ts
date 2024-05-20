import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMovieCrewMemberOnMovieArgs } from "./args/CreateOneMovieCrewMemberOnMovieArgs";
import { MovieCrewMemberOnMovie } from "../../../models/MovieCrewMemberOnMovie";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieCrewMemberOnMovie)
export class CreateOneMovieCrewMemberOnMovieResolver {
  @TypeGraphQL.Mutation((_returns) => MovieCrewMemberOnMovie, {
    nullable: false,
  })
  async createOneMovieCrewMemberOnMovie(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateOneMovieCrewMemberOnMovieArgs)
    args: CreateOneMovieCrewMemberOnMovieArgs,
  ): Promise<MovieCrewMemberOnMovie> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
