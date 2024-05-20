import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMovieCrewMemberOnMovieArgs } from "./args/UpsertOneMovieCrewMemberOnMovieArgs";
import { MovieCrewMemberOnMovie } from "../../../models/MovieCrewMemberOnMovie";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieCrewMemberOnMovie)
export class UpsertOneMovieCrewMemberOnMovieResolver {
  @TypeGraphQL.Mutation((_returns) => MovieCrewMemberOnMovie, {
    nullable: false,
  })
  async upsertOneMovieCrewMemberOnMovie(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpsertOneMovieCrewMemberOnMovieArgs)
    args: UpsertOneMovieCrewMemberOnMovieArgs,
  ): Promise<MovieCrewMemberOnMovie> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
