import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieCrewMemberArgs } from "./args/AggregateMovieCrewMemberArgs";
import { CreateManyMovieCrewMemberArgs } from "./args/CreateManyMovieCrewMemberArgs";
import { CreateOneMovieCrewMemberArgs } from "./args/CreateOneMovieCrewMemberArgs";
import { DeleteManyMovieCrewMemberArgs } from "./args/DeleteManyMovieCrewMemberArgs";
import { DeleteOneMovieCrewMemberArgs } from "./args/DeleteOneMovieCrewMemberArgs";
import { FindFirstMovieCrewMemberArgs } from "./args/FindFirstMovieCrewMemberArgs";
import { FindFirstMovieCrewMemberOrThrowArgs } from "./args/FindFirstMovieCrewMemberOrThrowArgs";
import { FindManyMovieCrewMemberArgs } from "./args/FindManyMovieCrewMemberArgs";
import { FindUniqueMovieCrewMemberArgs } from "./args/FindUniqueMovieCrewMemberArgs";
import { FindUniqueMovieCrewMemberOrThrowArgs } from "./args/FindUniqueMovieCrewMemberOrThrowArgs";
import { GroupByMovieCrewMemberArgs } from "./args/GroupByMovieCrewMemberArgs";
import { UpdateManyMovieCrewMemberArgs } from "./args/UpdateManyMovieCrewMemberArgs";
import { UpdateOneMovieCrewMemberArgs } from "./args/UpdateOneMovieCrewMemberArgs";
import { UpsertOneMovieCrewMemberArgs } from "./args/UpsertOneMovieCrewMemberArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { MovieCrewMember } from "@/generated/type-graphql/models/MovieCrewMember";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovieCrewMember } from "../../outputs/AggregateMovieCrewMember";
import { MovieCrewMemberGroupBy } from "../../outputs/MovieCrewMemberGroupBy";

@TypeGraphQL.Resolver((_of) => MovieCrewMember)
export class MovieCrewMemberCrudResolver {
  @TypeGraphQL.Query((_returns) => AggregateMovieCrewMember, {
    nullable: false,
  })
  async aggregateMovieCrewMember(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => AggregateMovieCrewMemberArgs)
    args: AggregateMovieCrewMemberArgs,
  ): Promise<AggregateMovieCrewMember> {
    return getPrismaFromContext(ctx).movieCrewMember.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMovieCrewMember(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateManyMovieCrewMemberArgs)
    args: CreateManyMovieCrewMemberArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieCrewMember, {
    nullable: false,
  })
  async createOneMovieCrewMember(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateOneMovieCrewMemberArgs)
    args: CreateOneMovieCrewMemberArgs,
  ): Promise<MovieCrewMember> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyMovieCrewMember(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => DeleteManyMovieCrewMemberArgs)
    args: DeleteManyMovieCrewMemberArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieCrewMember, {
    nullable: true,
  })
  async deleteOneMovieCrewMember(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => DeleteOneMovieCrewMemberArgs)
    args: DeleteOneMovieCrewMemberArgs,
  ): Promise<MovieCrewMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieCrewMember, {
    nullable: true,
  })
  async findFirstMovieCrewMember(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieCrewMemberArgs)
    args: FindFirstMovieCrewMemberArgs,
  ): Promise<MovieCrewMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieCrewMember, {
    nullable: true,
  })
  async findFirstMovieCrewMemberOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieCrewMemberOrThrowArgs)
    args: FindFirstMovieCrewMemberOrThrowArgs,
  ): Promise<MovieCrewMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MovieCrewMember], {
    nullable: false,
  })
  async movieCrewMembers(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindManyMovieCrewMemberArgs)
    args: FindManyMovieCrewMemberArgs,
  ): Promise<MovieCrewMember[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieCrewMember, {
    nullable: true,
  })
  async movieCrewMember(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieCrewMemberArgs)
    args: FindUniqueMovieCrewMemberArgs,
  ): Promise<MovieCrewMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieCrewMember, {
    nullable: true,
  })
  async getMovieCrewMember(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieCrewMemberOrThrowArgs)
    args: FindUniqueMovieCrewMemberOrThrowArgs,
  ): Promise<MovieCrewMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MovieCrewMemberGroupBy], {
    nullable: false,
  })
  async groupByMovieCrewMember(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => GroupByMovieCrewMemberArgs)
    args: GroupByMovieCrewMemberArgs,
  ): Promise<MovieCrewMemberGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.groupBy({
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
  async updateManyMovieCrewMember(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpdateManyMovieCrewMemberArgs)
    args: UpdateManyMovieCrewMemberArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieCrewMember, {
    nullable: true,
  })
  async updateOneMovieCrewMember(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpdateOneMovieCrewMemberArgs)
    args: UpdateOneMovieCrewMemberArgs,
  ): Promise<MovieCrewMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieCrewMember, {
    nullable: false,
  })
  async upsertOneMovieCrewMember(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpsertOneMovieCrewMemberArgs)
    args: UpsertOneMovieCrewMemberArgs,
  ): Promise<MovieCrewMember> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
