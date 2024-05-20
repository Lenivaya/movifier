import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovifierAppUserArgs } from "./args/GroupByMovifierAppUserArgs";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import { MovifierAppUserGroupBy } from "../../outputs/MovifierAppUserGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovifierAppUser)
export class GroupByMovifierAppUserResolver {
  @TypeGraphQL.Query(_returns => [MovifierAppUserGroupBy], {
    nullable: false
  })
  async groupByMovifierAppUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => GroupByMovifierAppUserArgs) args: GroupByMovifierAppUserArgs): Promise<MovifierAppUserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
