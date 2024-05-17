import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieListStatsArgs } from "./args/AggregateMovieListStatsArgs";
import { CreateManyMovieListStatsArgs } from "./args/CreateManyMovieListStatsArgs";
import { CreateOneMovieListStatsArgs } from "./args/CreateOneMovieListStatsArgs";
import { DeleteManyMovieListStatsArgs } from "./args/DeleteManyMovieListStatsArgs";
import { DeleteOneMovieListStatsArgs } from "./args/DeleteOneMovieListStatsArgs";
import { FindFirstMovieListStatsArgs } from "./args/FindFirstMovieListStatsArgs";
import { FindFirstMovieListStatsOrThrowArgs } from "./args/FindFirstMovieListStatsOrThrowArgs";
import { FindManyMovieListStatsArgs } from "./args/FindManyMovieListStatsArgs";
import { FindUniqueMovieListStatsArgs } from "./args/FindUniqueMovieListStatsArgs";
import { FindUniqueMovieListStatsOrThrowArgs } from "./args/FindUniqueMovieListStatsOrThrowArgs";
import { GroupByMovieListStatsArgs } from "./args/GroupByMovieListStatsArgs";
import { UpdateManyMovieListStatsArgs } from "./args/UpdateManyMovieListStatsArgs";
import { UpdateOneMovieListStatsArgs } from "./args/UpdateOneMovieListStatsArgs";
import { UpsertOneMovieListStatsArgs } from "./args/UpsertOneMovieListStatsArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { MovieListStats } from "../../../models/MovieListStats";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovieListStats } from "../../outputs/AggregateMovieListStats";
import { MovieListStatsGroupBy } from "../../outputs/MovieListStatsGroupBy";

@TypeGraphQL.Resolver((_of) => MovieListStats)
export class MovieListStatsCrudResolver {
  @TypeGraphQL.Query((_returns) => AggregateMovieListStats, {
    nullable: false,
  })
  async aggregateMovieListStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => AggregateMovieListStatsArgs)
    args: AggregateMovieListStatsArgs,
  ): Promise<AggregateMovieListStats> {
    return getPrismaFromContext(ctx).movieListStats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMovieListStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateManyMovieListStatsArgs)
    args: CreateManyMovieListStatsArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieListStats, {
    nullable: false,
  })
  async createOneMovieListStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateOneMovieListStatsArgs)
    args: CreateOneMovieListStatsArgs,
  ): Promise<MovieListStats> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyMovieListStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => DeleteManyMovieListStatsArgs)
    args: DeleteManyMovieListStatsArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieListStats, {
    nullable: true,
  })
  async deleteOneMovieListStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => DeleteOneMovieListStatsArgs)
    args: DeleteOneMovieListStatsArgs,
  ): Promise<MovieListStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieListStats, {
    nullable: true,
  })
  async findFirstMovieListStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieListStatsArgs)
    args: FindFirstMovieListStatsArgs,
  ): Promise<MovieListStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieListStats, {
    nullable: true,
  })
  async findFirstMovieListStatsOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieListStatsOrThrowArgs)
    args: FindFirstMovieListStatsOrThrowArgs,
  ): Promise<MovieListStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MovieListStats], {
    nullable: false,
  })
  async findManyMovieListStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindManyMovieListStatsArgs)
    args: FindManyMovieListStatsArgs,
  ): Promise<MovieListStats[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieListStats, {
    nullable: true,
  })
  async findUniqueMovieListStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieListStatsArgs)
    args: FindUniqueMovieListStatsArgs,
  ): Promise<MovieListStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieListStats, {
    nullable: true,
  })
  async findUniqueMovieListStatsOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieListStatsOrThrowArgs)
    args: FindUniqueMovieListStatsOrThrowArgs,
  ): Promise<MovieListStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MovieListStatsGroupBy], {
    nullable: false,
  })
  async groupByMovieListStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => GroupByMovieListStatsArgs)
    args: GroupByMovieListStatsArgs,
  ): Promise<MovieListStatsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.groupBy({
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
  async updateManyMovieListStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpdateManyMovieListStatsArgs)
    args: UpdateManyMovieListStatsArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieListStats, {
    nullable: true,
  })
  async updateOneMovieListStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpdateOneMovieListStatsArgs)
    args: UpdateOneMovieListStatsArgs,
  ): Promise<MovieListStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieListStats, {
    nullable: false,
  })
  async upsertOneMovieListStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpsertOneMovieListStatsArgs)
    args: UpsertOneMovieListStatsArgs,
  ): Promise<MovieListStats> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
