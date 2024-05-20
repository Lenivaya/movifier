import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Movie } from "../../../models/Movie";
import { MovieCrewMember } from "../../../models/MovieCrewMember";
import { MovieCrewMemberOnMovie } from "../../../models/MovieCrewMemberOnMovie";
import { MovieCrewMemberType } from "../../../models/MovieCrewMemberType";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieCrewMemberOnMovie)
export class MovieCrewMemberOnMovieRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Movie, {
    nullable: false,
  })
  async movie(
    @TypeGraphQL.Root() movieCrewMemberOnMovie: MovieCrewMemberOnMovie,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Movie> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movieCrewMemberOnMovie.findUniqueOrThrow({
        where: {
          movieId_movieCrewMemberId_movieCrewMemberTypeId: {
            movieId: movieCrewMemberOnMovie.movieId,
            movieCrewMemberId: movieCrewMemberOnMovie.movieCrewMemberId,
            movieCrewMemberTypeId: movieCrewMemberOnMovie.movieCrewMemberTypeId,
          },
        },
      })
      .movie({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => MovieCrewMember, {
    nullable: false,
  })
  async crewMember(
    @TypeGraphQL.Root() movieCrewMemberOnMovie: MovieCrewMemberOnMovie,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<MovieCrewMember> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movieCrewMemberOnMovie.findUniqueOrThrow({
        where: {
          movieId_movieCrewMemberId_movieCrewMemberTypeId: {
            movieId: movieCrewMemberOnMovie.movieId,
            movieCrewMemberId: movieCrewMemberOnMovie.movieCrewMemberId,
            movieCrewMemberTypeId: movieCrewMemberOnMovie.movieCrewMemberTypeId,
          },
        },
      })
      .crewMember({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => MovieCrewMemberType, {
    nullable: false,
  })
  async movieCrewMemberType(
    @TypeGraphQL.Root() movieCrewMemberOnMovie: MovieCrewMemberOnMovie,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<MovieCrewMemberType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movieCrewMemberOnMovie.findUniqueOrThrow({
        where: {
          movieId_movieCrewMemberId_movieCrewMemberTypeId: {
            movieId: movieCrewMemberOnMovie.movieId,
            movieCrewMemberId: movieCrewMemberOnMovie.movieCrewMemberId,
            movieCrewMemberTypeId: movieCrewMemberOnMovie.movieCrewMemberTypeId,
          },
        },
      })
      .movieCrewMemberType({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
