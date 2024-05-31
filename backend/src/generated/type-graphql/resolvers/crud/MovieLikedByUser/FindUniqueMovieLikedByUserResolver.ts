import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieLikedByUserArgs } from "./args/FindUniqueMovieLikedByUserArgs";
import { MovieLikedByUser } from "../../../models/MovieLikedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieLikedByUser)
export class FindUniqueMovieLikedByUserResolver {
  @TypeGraphQL.Query(_returns => MovieLikedByUser, {
    nullable: true
  })
  async movieLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieLikedByUserArgs): Promise<MovieLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieLikedByUser.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
