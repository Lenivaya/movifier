import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMovieListLikedByUserArgs } from "./args/DeleteOneMovieListLikedByUserArgs";
import { MovieListLikedByUser } from "../../../models/MovieListLikedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieListLikedByUser)
export class DeleteOneMovieListLikedByUserResolver {
  @TypeGraphQL.Mutation(_returns => MovieListLikedByUser, {
    nullable: true
  })
  async deleteOneMovieListLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMovieListLikedByUserArgs): Promise<MovieListLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListLikedByUser.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
