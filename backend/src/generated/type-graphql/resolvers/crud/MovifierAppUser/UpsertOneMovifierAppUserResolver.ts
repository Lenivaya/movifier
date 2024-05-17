import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMovifierAppUserArgs } from "./args/UpsertOneMovifierAppUserArgs";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovifierAppUser)
export class UpsertOneMovifierAppUserResolver {
  @TypeGraphQL.Mutation((_returns) => MovifierAppUser, {
    nullable: false,
  })
  async upsertOneMovifierAppUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpsertOneMovifierAppUserArgs)
    args: UpsertOneMovifierAppUserArgs,
  ): Promise<MovifierAppUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
