import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovifierAppUserArgs } from "./args/AggregateMovifierAppUserArgs";
import { CreateManyMovifierAppUserArgs } from "./args/CreateManyMovifierAppUserArgs";
import { CreateOneMovifierAppUserArgs } from "./args/CreateOneMovifierAppUserArgs";
import { DeleteManyMovifierAppUserArgs } from "./args/DeleteManyMovifierAppUserArgs";
import { DeleteOneMovifierAppUserArgs } from "./args/DeleteOneMovifierAppUserArgs";
import { FindFirstMovifierAppUserArgs } from "./args/FindFirstMovifierAppUserArgs";
import { FindFirstMovifierAppUserOrThrowArgs } from "./args/FindFirstMovifierAppUserOrThrowArgs";
import { FindManyMovifierAppUserArgs } from "./args/FindManyMovifierAppUserArgs";
import { FindUniqueMovifierAppUserArgs } from "./args/FindUniqueMovifierAppUserArgs";
import { FindUniqueMovifierAppUserOrThrowArgs } from "./args/FindUniqueMovifierAppUserOrThrowArgs";
import { GroupByMovifierAppUserArgs } from "./args/GroupByMovifierAppUserArgs";
import { UpdateManyMovifierAppUserArgs } from "./args/UpdateManyMovifierAppUserArgs";
import { UpdateOneMovifierAppUserArgs } from "./args/UpdateOneMovifierAppUserArgs";
import { UpsertOneMovifierAppUserArgs } from "./args/UpsertOneMovifierAppUserArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovifierAppUser } from "../../outputs/AggregateMovifierAppUser";
import { MovifierAppUserGroupBy } from "../../outputs/MovifierAppUserGroupBy";

@TypeGraphQL.Resolver(_of => MovifierAppUser)
export class MovifierAppUserCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMovifierAppUser, {
    nullable: false
  })
  async aggregateMovifierAppUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateMovifierAppUserArgs) args: AggregateMovifierAppUserArgs): Promise<AggregateMovifierAppUser> {
    return getPrismaFromContext(ctx).movifierAppUser.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMovifierAppUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyMovifierAppUserArgs) args: CreateManyMovifierAppUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovifierAppUser, {
    nullable: false
  })
  async createOneMovifierAppUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateOneMovifierAppUserArgs) args: CreateOneMovifierAppUserArgs): Promise<MovifierAppUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMovifierAppUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteManyMovifierAppUserArgs) args: DeleteManyMovifierAppUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovifierAppUser, {
    nullable: true
  })
  async deleteOneMovifierAppUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteOneMovifierAppUserArgs) args: DeleteOneMovifierAppUserArgs): Promise<MovifierAppUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovifierAppUser, {
    nullable: true
  })
  async findFirstMovifierAppUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovifierAppUserArgs) args: FindFirstMovifierAppUserArgs): Promise<MovifierAppUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovifierAppUser, {
    nullable: true
  })
  async findFirstMovifierAppUserOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovifierAppUserOrThrowArgs) args: FindFirstMovifierAppUserOrThrowArgs): Promise<MovifierAppUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovifierAppUser], {
    nullable: false
  })
  async movifierAppUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindManyMovifierAppUserArgs) args: FindManyMovifierAppUserArgs): Promise<MovifierAppUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovifierAppUser, {
    nullable: true
  })
  async movifierAppUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovifierAppUserArgs) args: FindUniqueMovifierAppUserArgs): Promise<MovifierAppUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovifierAppUser, {
    nullable: true
  })
  async getMovifierAppUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovifierAppUserOrThrowArgs) args: FindUniqueMovifierAppUserOrThrowArgs): Promise<MovifierAppUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMovifierAppUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateManyMovifierAppUserArgs) args: UpdateManyMovifierAppUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => MovifierAppUser, {
    nullable: false
  })
  async upsertOneMovifierAppUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpsertOneMovifierAppUserArgs) args: UpsertOneMovifierAppUserArgs): Promise<MovifierAppUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
