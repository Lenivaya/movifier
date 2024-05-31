import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Movie } from "../../../models/Movie";
import { MovieInfo } from "../../../models/MovieInfo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieInfo)
export class MovieInfoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Movie, {
    nullable: false
  })
  async movie(@TypeGraphQL.Root() movieInfo: MovieInfo, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Movie> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.findUniqueOrThrow({
      where: {
        id: movieInfo.id,
      },
    }).movie({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
