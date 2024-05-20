import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MovieList } from "../../../models/MovieList";
import { MovieListComment } from "../../../models/MovieListComment";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieListComment)
export class MovieListCommentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => MovieList, {
    nullable: false
  })
  async movieList(@TypeGraphQL.Root() movieListComment: MovieListComment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MovieList> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.findUniqueOrThrow({
      where: {
        id: movieListComment.id,
      },
    }).movieList({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MovifierAppUser, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() movieListComment: MovieListComment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MovifierAppUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.findUniqueOrThrow({
      where: {
        id: movieListComment.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
