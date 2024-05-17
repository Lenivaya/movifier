import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovifierAppUserOrThrowArgs } from "./args/FindUniqueMovifierAppUserOrThrowArgs";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovifierAppUser)
export class FindUniqueMovifierAppUserOrThrowResolver {
  @TypeGraphQL.Query((_returns) => MovifierAppUser, {
    nullable: true,
  })
  async getMovifierAppUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovifierAppUserOrThrowArgs)
    args: FindUniqueMovifierAppUserOrThrowArgs,
  ): Promise<MovifierAppUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
