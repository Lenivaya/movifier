import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieListCommentArgs } from "./args/AggregateMovieListCommentArgs";
import { MovieListComment } from "@/generated/type-graphql/models/MovieListComment";
import { AggregateMovieListComment } from "../../outputs/AggregateMovieListComment";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieListComment)
export class AggregateMovieListCommentResolver {
  @TypeGraphQL.Query((_returns) => AggregateMovieListComment, {
    nullable: false,
  })
  async aggregateMovieListComment(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => AggregateMovieListCommentArgs)
    args: AggregateMovieListCommentArgs,
  ): Promise<AggregateMovieListComment> {
    return getPrismaFromContext(ctx).movieListComment.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
