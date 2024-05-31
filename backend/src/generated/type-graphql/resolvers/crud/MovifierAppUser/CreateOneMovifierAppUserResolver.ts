import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMovifierAppUserArgs } from "./args/CreateOneMovifierAppUserArgs";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovifierAppUser)
export class CreateOneMovifierAppUserResolver {
  @TypeGraphQL.Mutation(_returns => MovifierAppUser, {
    nullable: false
  })
  async createOneMovifierAppUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMovifierAppUserArgs): Promise<MovifierAppUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
