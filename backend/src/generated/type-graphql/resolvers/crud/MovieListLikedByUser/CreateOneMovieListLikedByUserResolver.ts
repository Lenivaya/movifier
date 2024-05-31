import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMovieListLikedByUserArgs } from "./args/CreateOneMovieListLikedByUserArgs";
import { MovieListLikedByUser } from "../../../models/MovieListLikedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieListLikedByUser)
export class CreateOneMovieListLikedByUserResolver {
  @TypeGraphQL.Mutation(_returns => MovieListLikedByUser, {
    nullable: false
  })
  async createOneMovieListLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMovieListLikedByUserArgs): Promise<MovieListLikedByUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListLikedByUser.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
