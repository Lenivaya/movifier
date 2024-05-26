import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieLikedByUserArgs } from "./args/AggregateMovieLikedByUserArgs";
import { MovieLikedByUser } from "../../../models/MovieLikedByUser";
import { AggregateMovieLikedByUser } from "../../outputs/AggregateMovieLikedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieLikedByUser)
export class AggregateMovieLikedByUserResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieLikedByUser, {
    nullable: false
  })
  async aggregateMovieLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovieLikedByUserArgs): Promise<AggregateMovieLikedByUser> {
    return getPrismaFromContext(ctx).movieLikedByUser.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
