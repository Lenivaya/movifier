import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMovifierAppUserArgs } from "./args/DeleteOneMovifierAppUserArgs";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovifierAppUser)
export class DeleteOneMovifierAppUserResolver {
  @TypeGraphQL.Mutation((_returns) => MovifierAppUser, {
    nullable: true,
  })
  async deleteOneMovifierAppUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => DeleteOneMovifierAppUserArgs)
    args: DeleteOneMovifierAppUserArgs,
  ): Promise<MovifierAppUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
