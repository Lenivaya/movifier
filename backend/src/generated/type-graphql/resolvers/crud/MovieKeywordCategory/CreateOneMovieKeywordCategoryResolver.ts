import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMovieKeywordCategoryArgs } from "./args/CreateOneMovieKeywordCategoryArgs";
import { MovieKeywordCategory } from "@/generated/type-graphql/models/MovieKeywordCategory";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieKeywordCategory)
export class CreateOneMovieKeywordCategoryResolver {
  @TypeGraphQL.Mutation((_returns) => MovieKeywordCategory, {
    nullable: false,
  })
  async createOneMovieKeywordCategory(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateOneMovieKeywordCategoryArgs)
    args: CreateOneMovieKeywordCategoryArgs,
  ): Promise<MovieKeywordCategory> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
