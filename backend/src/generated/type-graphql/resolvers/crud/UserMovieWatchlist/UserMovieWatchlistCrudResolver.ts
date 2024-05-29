import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserMovieWatchlistArgs } from "./args/AggregateUserMovieWatchlistArgs";
import { CreateManyUserMovieWatchlistArgs } from "./args/CreateManyUserMovieWatchlistArgs";
import { CreateOneUserMovieWatchlistArgs } from "./args/CreateOneUserMovieWatchlistArgs";
import { DeleteManyUserMovieWatchlistArgs } from "./args/DeleteManyUserMovieWatchlistArgs";
import { DeleteOneUserMovieWatchlistArgs } from "./args/DeleteOneUserMovieWatchlistArgs";
import { FindFirstUserMovieWatchlistArgs } from "./args/FindFirstUserMovieWatchlistArgs";
import { FindFirstUserMovieWatchlistOrThrowArgs } from "./args/FindFirstUserMovieWatchlistOrThrowArgs";
import { FindManyUserMovieWatchlistArgs } from "./args/FindManyUserMovieWatchlistArgs";
import { FindUniqueUserMovieWatchlistArgs } from "./args/FindUniqueUserMovieWatchlistArgs";
import { FindUniqueUserMovieWatchlistOrThrowArgs } from "./args/FindUniqueUserMovieWatchlistOrThrowArgs";
import { GroupByUserMovieWatchlistArgs } from "./args/GroupByUserMovieWatchlistArgs";
import { UpdateManyUserMovieWatchlistArgs } from "./args/UpdateManyUserMovieWatchlistArgs";
import { UpdateOneUserMovieWatchlistArgs } from "./args/UpdateOneUserMovieWatchlistArgs";
import { UpsertOneUserMovieWatchlistArgs } from "./args/UpsertOneUserMovieWatchlistArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { UserMovieWatchlist } from "../../../models/UserMovieWatchlist";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUserMovieWatchlist } from "../../outputs/AggregateUserMovieWatchlist";
import { UserMovieWatchlistGroupBy } from "../../outputs/UserMovieWatchlistGroupBy";

@TypeGraphQL.Resolver(_of => UserMovieWatchlist)
export class UserMovieWatchlistCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateUserMovieWatchlist, {
    nullable: false
  })
  async aggregateUserMovieWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserMovieWatchlistArgs): Promise<AggregateUserMovieWatchlist> {
    return getPrismaFromContext(ctx).userMovieWatchlist.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUserMovieWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUserMovieWatchlistArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserMovieWatchlist, {
    nullable: false
  })
  async createOneUserMovieWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserMovieWatchlistArgs): Promise<UserMovieWatchlist> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUserMovieWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUserMovieWatchlistArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserMovieWatchlist, {
    nullable: true
  })
  async deleteOneUserMovieWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUserMovieWatchlistArgs): Promise<UserMovieWatchlist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserMovieWatchlist, {
    nullable: true
  })
  async findFirstUserMovieWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserMovieWatchlistArgs): Promise<UserMovieWatchlist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserMovieWatchlist, {
    nullable: true
  })
  async findFirstUserMovieWatchlistOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserMovieWatchlistOrThrowArgs): Promise<UserMovieWatchlist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserMovieWatchlist], {
    nullable: false
  })
  async userMovieWatchlists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUserMovieWatchlistArgs): Promise<UserMovieWatchlist[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserMovieWatchlist, {
    nullable: true
  })
  async userMovieWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserMovieWatchlistArgs): Promise<UserMovieWatchlist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserMovieWatchlist, {
    nullable: true
  })
  async getUserMovieWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserMovieWatchlistOrThrowArgs): Promise<UserMovieWatchlist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserMovieWatchlistGroupBy], {
    nullable: false
  })
  async groupByUserMovieWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserMovieWatchlistArgs): Promise<UserMovieWatchlistGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUserMovieWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUserMovieWatchlistArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserMovieWatchlist, {
    nullable: true
  })
  async updateOneUserMovieWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUserMovieWatchlistArgs): Promise<UserMovieWatchlist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserMovieWatchlist, {
    nullable: false
  })
  async upsertOneUserMovieWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUserMovieWatchlistArgs): Promise<UserMovieWatchlist> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
