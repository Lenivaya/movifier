import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovifierAppUserArgs } from "./args/FindUniqueMovifierAppUserArgs";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovifierAppUser)
export class FindUniqueMovifierAppUserResolver {
  @TypeGraphQL.Query(_returns => MovifierAppUser, {
    nullable: true
  })
  async movifierAppUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovifierAppUserArgs): Promise<MovifierAppUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
