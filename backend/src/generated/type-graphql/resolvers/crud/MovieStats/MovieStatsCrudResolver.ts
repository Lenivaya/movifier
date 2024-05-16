import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieStatsArgs } from "./args/AggregateMovieStatsArgs";
import { CreateManyMovieStatsArgs } from "./args/CreateManyMovieStatsArgs";
import { CreateOneMovieStatsArgs } from "./args/CreateOneMovieStatsArgs";
import { DeleteManyMovieStatsArgs } from "./args/DeleteManyMovieStatsArgs";
import { DeleteOneMovieStatsArgs } from "./args/DeleteOneMovieStatsArgs";
import { FindFirstMovieStatsArgs } from "./args/FindFirstMovieStatsArgs";
import { FindFirstMovieStatsOrThrowArgs } from "./args/FindFirstMovieStatsOrThrowArgs";
import { FindManyMovieStatsArgs } from "./args/FindManyMovieStatsArgs";
import { FindUniqueMovieStatsArgs } from "./args/FindUniqueMovieStatsArgs";
import { FindUniqueMovieStatsOrThrowArgs } from "./args/FindUniqueMovieStatsOrThrowArgs";
import { GroupByMovieStatsArgs } from "./args/GroupByMovieStatsArgs";
import { UpdateManyMovieStatsArgs } from "./args/UpdateManyMovieStatsArgs";
import { UpdateOneMovieStatsArgs } from "./args/UpdateOneMovieStatsArgs";
import { UpsertOneMovieStatsArgs } from "./args/UpsertOneMovieStatsArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { MovieStats } from "@/generated/type-graphql/models/MovieStats";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovieStats } from "../../outputs/AggregateMovieStats";
import { MovieStatsGroupBy } from "../../outputs/MovieStatsGroupBy";

@TypeGraphQL.Resolver((_of) => MovieStats)
export class MovieStatsCrudResolver {
  @TypeGraphQL.Query((_returns) => AggregateMovieStats, {
    nullable: false,
  })
  async aggregateMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => AggregateMovieStatsArgs)
    args: AggregateMovieStatsArgs,
  ): Promise<AggregateMovieStats> {
    return getPrismaFromContext(ctx).movieStats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateManyMovieStatsArgs)
    args: CreateManyMovieStatsArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieStats, {
    nullable: false,
  })
  async createOneMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateOneMovieStatsArgs)
    args: CreateOneMovieStatsArgs,
  ): Promise<MovieStats> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => DeleteManyMovieStatsArgs)
    args: DeleteManyMovieStatsArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieStats, {
    nullable: true,
  })
  async deleteOneMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => DeleteOneMovieStatsArgs)
    args: DeleteOneMovieStatsArgs,
  ): Promise<MovieStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieStats, {
    nullable: true,
  })
  async findFirstMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieStatsArgs)
    args: FindFirstMovieStatsArgs,
  ): Promise<MovieStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieStats, {
    nullable: true,
  })
  async findFirstMovieStatsOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieStatsOrThrowArgs)
    args: FindFirstMovieStatsOrThrowArgs,
  ): Promise<MovieStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MovieStats], {
    nullable: false,
  })
  async findManyMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindManyMovieStatsArgs)
    args: FindManyMovieStatsArgs,
  ): Promise<MovieStats[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieStats, {
    nullable: true,
  })
  async findUniqueMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieStatsArgs)
    args: FindUniqueMovieStatsArgs,
  ): Promise<MovieStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieStats, {
    nullable: true,
  })
  async findUniqueMovieStatsOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieStatsOrThrowArgs)
    args: FindUniqueMovieStatsOrThrowArgs,
  ): Promise<MovieStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MovieStatsGroupBy], {
    nullable: false,
  })
  async groupByMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => GroupByMovieStatsArgs)
    args: GroupByMovieStatsArgs,
  ): Promise<MovieStatsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpdateManyMovieStatsArgs)
    args: UpdateManyMovieStatsArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieStats, {
    nullable: true,
  })
  async updateOneMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpdateOneMovieStatsArgs)
    args: UpdateOneMovieStatsArgs,
  ): Promise<MovieStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieStats, {
    nullable: false,
  })
  async upsertOneMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpsertOneMovieStatsArgs)
    args: UpsertOneMovieStatsArgs,
  ): Promise<MovieStats> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
