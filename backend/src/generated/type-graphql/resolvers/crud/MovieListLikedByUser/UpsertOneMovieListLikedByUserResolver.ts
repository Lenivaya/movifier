import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMovieListLikedByUserArgs } from "./args/UpsertOneMovieListLikedByUserArgs";
import { MovieListLikedByUser } from "../../../models/MovieListLikedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieListLikedByUser)
export class UpsertOneMovieListLikedByUserResolver {
  @TypeGraphQL.Mutation(_returns => MovieListLikedByUser, {
    nullable: false
  })
  async upsertOneMovieListLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMovieListLikedByUserArgs): Promise<MovieListLikedByUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListLikedByUser.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
