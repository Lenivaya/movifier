import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMovieWatchedByUserArgs } from "./args/DeleteOneMovieWatchedByUserArgs";
import { MovieWatchedByUser } from "../../../models/MovieWatchedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieWatchedByUser)
export class DeleteOneMovieWatchedByUserResolver {
  @TypeGraphQL.Mutation(_returns => MovieWatchedByUser, {
    nullable: true
  })
  async deleteOneMovieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMovieWatchedByUserArgs): Promise<MovieWatchedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
