import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMovifierAppUserArgs } from "./args/FindManyMovifierAppUserArgs";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovifierAppUser)
export class FindManyMovifierAppUserResolver {
  @TypeGraphQL.Query((_returns) => [MovifierAppUser], {
    nullable: false,
  })
  async movifierAppUsers(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindManyMovifierAppUserArgs)
    args: FindManyMovifierAppUserArgs,
  ): Promise<MovifierAppUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
