import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMovieSpokenLanguageArgs } from "./args/DeleteOneMovieSpokenLanguageArgs";
import { MovieSpokenLanguage } from "@/generated/type-graphql/models/MovieSpokenLanguage";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieSpokenLanguage)
export class DeleteOneMovieSpokenLanguageResolver {
  @TypeGraphQL.Mutation((_returns) => MovieSpokenLanguage, {
    nullable: true,
  })
  async deleteOneMovieSpokenLanguage(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => DeleteOneMovieSpokenLanguageArgs)
    args: DeleteOneMovieSpokenLanguageArgs,
  ): Promise<MovieSpokenLanguage | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
