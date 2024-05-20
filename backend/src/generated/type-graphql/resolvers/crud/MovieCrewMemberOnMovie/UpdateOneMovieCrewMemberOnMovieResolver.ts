import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMovieCrewMemberOnMovieArgs } from "./args/UpdateOneMovieCrewMemberOnMovieArgs";
import { MovieCrewMemberOnMovie } from "../../../models/MovieCrewMemberOnMovie";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieCrewMemberOnMovie)
export class UpdateOneMovieCrewMemberOnMovieResolver {
  @TypeGraphQL.Mutation(_returns => MovieCrewMemberOnMovie, {
    nullable: true
  })
  async updateOneMovieCrewMemberOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateOneMovieCrewMemberOnMovieArgs) args: UpdateOneMovieCrewMemberOnMovieArgs): Promise<MovieCrewMemberOnMovie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
