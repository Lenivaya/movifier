import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieOrThrowArgs } from "./args/FindFirstMovieOrThrowArgs";
import { Movie } from "@/generated/type-graphql/models/Movie";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Movie)
export class FindFirstMovieOrThrowResolver {
  @TypeGraphQL.Query((_returns) => Movie, {
    nullable: true,
  })
  async findFirstMovieOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieOrThrowArgs)
    args: FindFirstMovieOrThrowArgs,
  ): Promise<Movie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
