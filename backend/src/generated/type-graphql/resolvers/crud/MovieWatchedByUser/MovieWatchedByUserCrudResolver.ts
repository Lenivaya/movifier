import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieWatchedByUserArgs } from "./args/AggregateMovieWatchedByUserArgs";
import { CreateManyMovieWatchedByUserArgs } from "./args/CreateManyMovieWatchedByUserArgs";
import { CreateOneMovieWatchedByUserArgs } from "./args/CreateOneMovieWatchedByUserArgs";
import { DeleteManyMovieWatchedByUserArgs } from "./args/DeleteManyMovieWatchedByUserArgs";
import { DeleteOneMovieWatchedByUserArgs } from "./args/DeleteOneMovieWatchedByUserArgs";
import { FindFirstMovieWatchedByUserArgs } from "./args/FindFirstMovieWatchedByUserArgs";
import { FindFirstMovieWatchedByUserOrThrowArgs } from "./args/FindFirstMovieWatchedByUserOrThrowArgs";
import { FindManyMovieWatchedByUserArgs } from "./args/FindManyMovieWatchedByUserArgs";
import { FindUniqueMovieWatchedByUserArgs } from "./args/FindUniqueMovieWatchedByUserArgs";
import { FindUniqueMovieWatchedByUserOrThrowArgs } from "./args/FindUniqueMovieWatchedByUserOrThrowArgs";
import { GroupByMovieWatchedByUserArgs } from "./args/GroupByMovieWatchedByUserArgs";
import { UpdateManyMovieWatchedByUserArgs } from "./args/UpdateManyMovieWatchedByUserArgs";
import { UpdateOneMovieWatchedByUserArgs } from "./args/UpdateOneMovieWatchedByUserArgs";
import { UpsertOneMovieWatchedByUserArgs } from "./args/UpsertOneMovieWatchedByUserArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MovieWatchedByUser } from "../../../models/MovieWatchedByUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovieWatchedByUser } from "../../outputs/AggregateMovieWatchedByUser";
import { MovieWatchedByUserGroupBy } from "../../outputs/MovieWatchedByUserGroupBy";

@TypeGraphQL.Resolver(_of => MovieWatchedByUser)
export class MovieWatchedByUserCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieWatchedByUser, {
    nullable: false
  })
  async aggregateMovieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovieWatchedByUserArgs): Promise<AggregateMovieWatchedByUser> {
    return getPrismaFromContext(ctx).movieWatchedByUser.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMovieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyMovieWatchedByUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieWatchedByUser, {
    nullable: false
  })
  async createOneMovieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMovieWatchedByUserArgs): Promise<MovieWatchedByUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMovieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyMovieWatchedByUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieWatchedByUser, {
    nullable: true
  })
  async deleteOneMovieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMovieWatchedByUserArgs): Promise<MovieWatchedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieWatchedByUser, {
    nullable: true
  })
  async findFirstMovieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieWatchedByUserArgs): Promise<MovieWatchedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieWatchedByUser, {
    nullable: true
  })
  async findFirstMovieWatchedByUserOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieWatchedByUserOrThrowArgs): Promise<MovieWatchedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieWatchedByUser], {
    nullable: false
  })
  async movieWatchedByUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMovieWatchedByUserArgs): Promise<MovieWatchedByUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieWatchedByUser, {
    nullable: true
  })
  async movieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieWatchedByUserArgs): Promise<MovieWatchedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieWatchedByUser, {
    nullable: true
  })
  async getMovieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieWatchedByUserOrThrowArgs): Promise<MovieWatchedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieWatchedByUserGroupBy], {
    nullable: false
  })
  async groupByMovieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMovieWatchedByUserArgs): Promise<MovieWatchedByUserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMovieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyMovieWatchedByUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieWatchedByUser, {
    nullable: true
  })
  async updateOneMovieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMovieWatchedByUserArgs): Promise<MovieWatchedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieWatchedByUser, {
    nullable: false
  })
  async upsertOneMovieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMovieWatchedByUserArgs): Promise<MovieWatchedByUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
