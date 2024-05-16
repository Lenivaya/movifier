import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneGenreArgs } from "./args/UpdateOneGenreArgs";
import { Genre } from "@/generated/type-graphql/models/Genre";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Genre)
export class UpdateOneGenreResolver {
  @TypeGraphQL.Mutation((_returns) => Genre, {
    nullable: true,
  })
  async updateOneGenre(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpdateOneGenreArgs) args: UpdateOneGenreArgs,
  ): Promise<Genre | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).genre.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
