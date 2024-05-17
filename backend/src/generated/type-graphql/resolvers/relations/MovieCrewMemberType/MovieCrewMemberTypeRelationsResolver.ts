import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MovieCrewMember } from "../../../models/MovieCrewMember";
import { MovieCrewMemberType } from "../../../models/MovieCrewMemberType";
import { MovieCrewMemberTypeMovieCrewMembersArgs } from "./args/MovieCrewMemberTypeMovieCrewMembersArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieCrewMemberType)
export class MovieCrewMemberTypeRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [MovieCrewMember], {
    nullable: false,
  })
  async movieCrewMembers(
    @TypeGraphQL.Root() movieCrewMemberType: MovieCrewMemberType,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieCrewMemberTypeMovieCrewMembersArgs)
    args: MovieCrewMemberTypeMovieCrewMembersArgs,
  ): Promise<MovieCrewMember[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movieCrewMemberType.findUniqueOrThrow({
        where: {
          id: movieCrewMemberType.id,
        },
      })
      .movieCrewMembers({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
