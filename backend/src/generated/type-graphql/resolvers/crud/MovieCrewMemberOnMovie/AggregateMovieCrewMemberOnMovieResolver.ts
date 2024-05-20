import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieCrewMemberOnMovieArgs } from "./args/AggregateMovieCrewMemberOnMovieArgs";
import { MovieCrewMemberOnMovie } from "../../../models/MovieCrewMemberOnMovie";
import { AggregateMovieCrewMemberOnMovie } from "../../outputs/AggregateMovieCrewMemberOnMovie";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieCrewMemberOnMovie)
export class AggregateMovieCrewMemberOnMovieResolver {
  @TypeGraphQL.Query((_returns) => AggregateMovieCrewMemberOnMovie, {
    nullable: false,
  })
  async aggregateMovieCrewMemberOnMovie(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => AggregateMovieCrewMemberOnMovieArgs)
    args: AggregateMovieCrewMemberOnMovieArgs,
  ): Promise<AggregateMovieCrewMemberOnMovie> {
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
