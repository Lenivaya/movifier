import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieLikedByUserOrThrowArgs } from "./args/FindUniqueMovieLikedByUserOrThrowArgs";
import { MovieLikedByUser } from "../../../models/MovieLikedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieLikedByUser)
export class FindUniqueMovieLikedByUserOrThrowResolver {
  @TypeGraphQL.Query(_returns => MovieLikedByUser, {
    nullable: true
  })
  async getMovieLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieLikedByUserOrThrowArgs): Promise<MovieLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieLikedByUser.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
