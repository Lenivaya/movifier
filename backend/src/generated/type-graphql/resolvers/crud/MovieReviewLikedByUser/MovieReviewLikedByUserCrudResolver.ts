import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieReviewLikedByUserArgs } from "./args/AggregateMovieReviewLikedByUserArgs";
import { CreateManyMovieReviewLikedByUserArgs } from "./args/CreateManyMovieReviewLikedByUserArgs";
import { CreateOneMovieReviewLikedByUserArgs } from "./args/CreateOneMovieReviewLikedByUserArgs";
import { DeleteManyMovieReviewLikedByUserArgs } from "./args/DeleteManyMovieReviewLikedByUserArgs";
import { DeleteOneMovieReviewLikedByUserArgs } from "./args/DeleteOneMovieReviewLikedByUserArgs";
import { FindFirstMovieReviewLikedByUserArgs } from "./args/FindFirstMovieReviewLikedByUserArgs";
import { FindFirstMovieReviewLikedByUserOrThrowArgs } from "./args/FindFirstMovieReviewLikedByUserOrThrowArgs";
import { FindManyMovieReviewLikedByUserArgs } from "./args/FindManyMovieReviewLikedByUserArgs";
import { FindUniqueMovieReviewLikedByUserArgs } from "./args/FindUniqueMovieReviewLikedByUserArgs";
import { FindUniqueMovieReviewLikedByUserOrThrowArgs } from "./args/FindUniqueMovieReviewLikedByUserOrThrowArgs";
import { GroupByMovieReviewLikedByUserArgs } from "./args/GroupByMovieReviewLikedByUserArgs";
import { UpdateManyMovieReviewLikedByUserArgs } from "./args/UpdateManyMovieReviewLikedByUserArgs";
import { UpdateOneMovieReviewLikedByUserArgs } from "./args/UpdateOneMovieReviewLikedByUserArgs";
import { UpsertOneMovieReviewLikedByUserArgs } from "./args/UpsertOneMovieReviewLikedByUserArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MovieReviewLikedByUser } from "../../../models/MovieReviewLikedByUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovieReviewLikedByUser } from "../../outputs/AggregateMovieReviewLikedByUser";
import { MovieReviewLikedByUserGroupBy } from "../../outputs/MovieReviewLikedByUserGroupBy";

@TypeGraphQL.Resolver(_of => MovieReviewLikedByUser)
export class MovieReviewLikedByUserCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieReviewLikedByUser, {
    nullable: false
  })
  async aggregateMovieReviewLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovieReviewLikedByUserArgs): Promise<AggregateMovieReviewLikedByUser> {
    return getPrismaFromContext(ctx).movieReviewLikedByUser.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMovieReviewLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyMovieReviewLikedByUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieReviewLikedByUser, {
    nullable: false
  })
  async createOneMovieReviewLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMovieReviewLikedByUserArgs): Promise<MovieReviewLikedByUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMovieReviewLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyMovieReviewLikedByUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieReviewLikedByUser, {
    nullable: true
  })
  async deleteOneMovieReviewLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMovieReviewLikedByUserArgs): Promise<MovieReviewLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieReviewLikedByUser, {
    nullable: true
  })
  async findFirstMovieReviewLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieReviewLikedByUserArgs): Promise<MovieReviewLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieReviewLikedByUser, {
    nullable: true
  })
  async findFirstMovieReviewLikedByUserOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieReviewLikedByUserOrThrowArgs): Promise<MovieReviewLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieReviewLikedByUser], {
    nullable: false
  })
  async movieReviewLikedByUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMovieReviewLikedByUserArgs): Promise<MovieReviewLikedByUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieReviewLikedByUser, {
    nullable: true
  })
  async movieReviewLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieReviewLikedByUserArgs): Promise<MovieReviewLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieReviewLikedByUser, {
    nullable: true
  })
  async getMovieReviewLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieReviewLikedByUserOrThrowArgs): Promise<MovieReviewLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieReviewLikedByUserGroupBy], {
    nullable: false
  })
  async groupByMovieReviewLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMovieReviewLikedByUserArgs): Promise<MovieReviewLikedByUserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMovieReviewLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyMovieReviewLikedByUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieReviewLikedByUser, {
    nullable: true
  })
  async updateOneMovieReviewLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMovieReviewLikedByUserArgs): Promise<MovieReviewLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieReviewLikedByUser, {
    nullable: false
  })
  async upsertOneMovieReviewLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMovieReviewLikedByUserArgs): Promise<MovieReviewLikedByUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
