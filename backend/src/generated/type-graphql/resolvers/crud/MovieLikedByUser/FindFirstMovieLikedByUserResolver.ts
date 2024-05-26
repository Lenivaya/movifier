import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieLikedByUserArgs } from "./args/FindFirstMovieLikedByUserArgs";
import { MovieLikedByUser } from "../../../models/MovieLikedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieLikedByUser)
export class FindFirstMovieLikedByUserResolver {
  @TypeGraphQL.Query(_returns => MovieLikedByUser, {
    nullable: true
  })
  async findFirstMovieLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieLikedByUserArgs): Promise<MovieLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieLikedByUser.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
