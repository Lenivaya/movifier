import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovifierAppUserArgs } from "./args/AggregateMovifierAppUserArgs";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import { AggregateMovifierAppUser } from "../../outputs/AggregateMovifierAppUser";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovifierAppUser)
export class AggregateMovifierAppUserResolver {
  @TypeGraphQL.Query((_returns) => AggregateMovifierAppUser, {
    nullable: false,
  })
  async aggregateMovifierAppUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => AggregateMovifierAppUserArgs)
    args: AggregateMovifierAppUserArgs,
  ): Promise<AggregateMovifierAppUser> {
    return getPrismaFromContext(ctx).movifierAppUser.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
