import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMovieListArgs } from "./args/UpdateOneMovieListArgs";
import { MovieList } from "@/generated/type-graphql/models/MovieList";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieList)
export class UpdateOneMovieListResolver {
  @TypeGraphQL.Mutation((_returns) => MovieList, {
    nullable: true,
  })
  async updateOneMovieList(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpdateOneMovieListArgs)
    args: UpdateOneMovieListArgs,
  ): Promise<MovieList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieList.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
