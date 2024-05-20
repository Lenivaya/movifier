import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMovifierAppUserArgs } from "./args/UpdateOneMovifierAppUserArgs";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovifierAppUser)
export class UpdateOneMovifierAppUserResolver {
  @TypeGraphQL.Mutation(_returns => MovifierAppUser, {
    nullable: true
  })
  async updateOneMovifierAppUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateOneMovifierAppUserArgs) args: UpdateOneMovifierAppUserArgs): Promise<MovifierAppUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
