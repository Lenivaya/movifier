import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MovieCrewMember } from "../../../models/MovieCrewMember";
import { MovieCrewMemberOnMovie } from "../../../models/MovieCrewMemberOnMovie";
import { MovieCrewMemberMoviesArgs } from "./args/MovieCrewMemberMoviesArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieCrewMember)
export class MovieCrewMemberRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [MovieCrewMemberOnMovie], {
    nullable: false,
  })
  async movies(
    @TypeGraphQL.Root() movieCrewMember: MovieCrewMember,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieCrewMemberMoviesArgs)
    args: MovieCrewMemberMoviesArgs,
  ): Promise<MovieCrewMemberOnMovie[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movieCrewMember.findUniqueOrThrow({
        where: {
          id: movieCrewMember.id,
        },
      })
      .movies({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
