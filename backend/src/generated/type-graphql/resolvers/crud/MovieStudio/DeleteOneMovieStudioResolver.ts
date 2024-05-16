import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMovieStudioArgs } from "./args/DeleteOneMovieStudioArgs";
import { MovieStudio } from "@/generated/type-graphql/models/MovieStudio";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieStudio)
export class DeleteOneMovieStudioResolver {
  @TypeGraphQL.Mutation((_returns) => MovieStudio, {
    nullable: true,
  })
  async deleteOneMovieStudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => DeleteOneMovieStudioArgs)
    args: DeleteOneMovieStudioArgs,
  ): Promise<MovieStudio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
