import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Movie } from "../../../models/Movie";
import { MovieCrewMember } from "../../../models/MovieCrewMember";
import { MovieCrewMemberType } from "../../../models/MovieCrewMemberType";
import { MovieCrewMemberMovieCrewMemberTypeArgs } from "./args/MovieCrewMemberMovieCrewMemberTypeArgs";
import { MovieCrewMemberMoviesArgs } from "./args/MovieCrewMemberMoviesArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieCrewMember)
export class MovieCrewMemberRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Movie], {
    nullable: false,
  })
  async movies(
    @TypeGraphQL.Root() movieCrewMember: MovieCrewMember,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieCrewMemberMoviesArgs)
    args: MovieCrewMemberMoviesArgs,
  ): Promise<Movie[]> {
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

  @TypeGraphQL.FieldResolver((_type) => MovieCrewMemberType, {
    nullable: true,
  })
  async movieCrewMemberType(
    @TypeGraphQL.Root() movieCrewMember: MovieCrewMember,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieCrewMemberMovieCrewMemberTypeArgs)
    args: MovieCrewMemberMovieCrewMemberTypeArgs,
  ): Promise<MovieCrewMemberType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movieCrewMember.findUniqueOrThrow({
        where: {
          id: movieCrewMember.id,
        },
      })
      .movieCrewMemberType({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
