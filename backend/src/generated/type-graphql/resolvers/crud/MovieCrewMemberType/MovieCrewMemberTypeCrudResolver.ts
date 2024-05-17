import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieCrewMemberTypeArgs } from "./args/AggregateMovieCrewMemberTypeArgs";
import { CreateManyMovieCrewMemberTypeArgs } from "./args/CreateManyMovieCrewMemberTypeArgs";
import { CreateOneMovieCrewMemberTypeArgs } from "./args/CreateOneMovieCrewMemberTypeArgs";
import { DeleteManyMovieCrewMemberTypeArgs } from "./args/DeleteManyMovieCrewMemberTypeArgs";
import { DeleteOneMovieCrewMemberTypeArgs } from "./args/DeleteOneMovieCrewMemberTypeArgs";
import { FindFirstMovieCrewMemberTypeArgs } from "./args/FindFirstMovieCrewMemberTypeArgs";
import { FindFirstMovieCrewMemberTypeOrThrowArgs } from "./args/FindFirstMovieCrewMemberTypeOrThrowArgs";
import { FindManyMovieCrewMemberTypeArgs } from "./args/FindManyMovieCrewMemberTypeArgs";
import { FindUniqueMovieCrewMemberTypeArgs } from "./args/FindUniqueMovieCrewMemberTypeArgs";
import { FindUniqueMovieCrewMemberTypeOrThrowArgs } from "./args/FindUniqueMovieCrewMemberTypeOrThrowArgs";
import { GroupByMovieCrewMemberTypeArgs } from "./args/GroupByMovieCrewMemberTypeArgs";
import { UpdateManyMovieCrewMemberTypeArgs } from "./args/UpdateManyMovieCrewMemberTypeArgs";
import { UpdateOneMovieCrewMemberTypeArgs } from "./args/UpdateOneMovieCrewMemberTypeArgs";
import { UpsertOneMovieCrewMemberTypeArgs } from "./args/UpsertOneMovieCrewMemberTypeArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { MovieCrewMemberType } from "../../../models/MovieCrewMemberType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovieCrewMemberType } from "../../outputs/AggregateMovieCrewMemberType";
import { MovieCrewMemberTypeGroupBy } from "../../outputs/MovieCrewMemberTypeGroupBy";

@TypeGraphQL.Resolver((_of) => MovieCrewMemberType)
export class MovieCrewMemberTypeCrudResolver {
  @TypeGraphQL.Query((_returns) => AggregateMovieCrewMemberType, {
    nullable: false,
  })
  async aggregateMovieCrewMemberType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => AggregateMovieCrewMemberTypeArgs)
    args: AggregateMovieCrewMemberTypeArgs,
  ): Promise<AggregateMovieCrewMemberType> {
    return getPrismaFromContext(ctx).movieCrewMemberType.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMovieCrewMemberType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateManyMovieCrewMemberTypeArgs)
    args: CreateManyMovieCrewMemberTypeArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieCrewMemberType, {
    nullable: false,
  })
  async createOneMovieCrewMemberType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateOneMovieCrewMemberTypeArgs)
    args: CreateOneMovieCrewMemberTypeArgs,
  ): Promise<MovieCrewMemberType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyMovieCrewMemberType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => DeleteManyMovieCrewMemberTypeArgs)
    args: DeleteManyMovieCrewMemberTypeArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieCrewMemberType, {
    nullable: true,
  })
  async deleteOneMovieCrewMemberType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => DeleteOneMovieCrewMemberTypeArgs)
    args: DeleteOneMovieCrewMemberTypeArgs,
  ): Promise<MovieCrewMemberType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieCrewMemberType, {
    nullable: true,
  })
  async findFirstMovieCrewMemberType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieCrewMemberTypeArgs)
    args: FindFirstMovieCrewMemberTypeArgs,
  ): Promise<MovieCrewMemberType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieCrewMemberType, {
    nullable: true,
  })
  async findFirstMovieCrewMemberTypeOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieCrewMemberTypeOrThrowArgs)
    args: FindFirstMovieCrewMemberTypeOrThrowArgs,
  ): Promise<MovieCrewMemberType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MovieCrewMemberType], {
    nullable: false,
  })
  async movieCrewMemberTypes(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindManyMovieCrewMemberTypeArgs)
    args: FindManyMovieCrewMemberTypeArgs,
  ): Promise<MovieCrewMemberType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieCrewMemberType, {
    nullable: true,
  })
  async movieCrewMemberType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieCrewMemberTypeArgs)
    args: FindUniqueMovieCrewMemberTypeArgs,
  ): Promise<MovieCrewMemberType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieCrewMemberType, {
    nullable: true,
  })
  async getMovieCrewMemberType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieCrewMemberTypeOrThrowArgs)
    args: FindUniqueMovieCrewMemberTypeOrThrowArgs,
  ): Promise<MovieCrewMemberType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MovieCrewMemberTypeGroupBy], {
    nullable: false,
  })
  async groupByMovieCrewMemberType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => GroupByMovieCrewMemberTypeArgs)
    args: GroupByMovieCrewMemberTypeArgs,
  ): Promise<MovieCrewMemberTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.groupBy({
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
  async updateManyMovieCrewMemberType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpdateManyMovieCrewMemberTypeArgs)
    args: UpdateManyMovieCrewMemberTypeArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieCrewMemberType, {
    nullable: true,
  })
  async updateOneMovieCrewMemberType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpdateOneMovieCrewMemberTypeArgs)
    args: UpdateOneMovieCrewMemberTypeArgs,
  ): Promise<MovieCrewMemberType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieCrewMemberType, {
    nullable: false,
  })
  async upsertOneMovieCrewMemberType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpsertOneMovieCrewMemberTypeArgs)
    args: UpsertOneMovieCrewMemberTypeArgs,
  ): Promise<MovieCrewMemberType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
