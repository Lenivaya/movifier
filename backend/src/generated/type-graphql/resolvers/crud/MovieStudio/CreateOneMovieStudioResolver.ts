import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMovieStudioArgs } from "./args/CreateOneMovieStudioArgs";
import { MovieStudio } from "@/generated/type-graphql/models/MovieStudio";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieStudio)
export class CreateOneMovieStudioResolver {
  @TypeGraphQL.Mutation((_returns) => MovieStudio, {
    nullable: false,
  })
  async createOneMovieStudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateOneMovieStudioArgs)
    args: CreateOneMovieStudioArgs,
  ): Promise<MovieStudio> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
