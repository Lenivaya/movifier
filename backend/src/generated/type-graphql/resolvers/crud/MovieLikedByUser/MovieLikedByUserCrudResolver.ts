import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieLikedByUserArgs } from "./args/AggregateMovieLikedByUserArgs";
import { CreateManyMovieLikedByUserArgs } from "./args/CreateManyMovieLikedByUserArgs";
import { CreateOneMovieLikedByUserArgs } from "./args/CreateOneMovieLikedByUserArgs";
import { DeleteManyMovieLikedByUserArgs } from "./args/DeleteManyMovieLikedByUserArgs";
import { DeleteOneMovieLikedByUserArgs } from "./args/DeleteOneMovieLikedByUserArgs";
import { FindFirstMovieLikedByUserArgs } from "./args/FindFirstMovieLikedByUserArgs";
import { FindFirstMovieLikedByUserOrThrowArgs } from "./args/FindFirstMovieLikedByUserOrThrowArgs";
import { FindManyMovieLikedByUserArgs } from "./args/FindManyMovieLikedByUserArgs";
import { FindUniqueMovieLikedByUserArgs } from "./args/FindUniqueMovieLikedByUserArgs";
import { FindUniqueMovieLikedByUserOrThrowArgs } from "./args/FindUniqueMovieLikedByUserOrThrowArgs";
import { GroupByMovieLikedByUserArgs } from "./args/GroupByMovieLikedByUserArgs";
import { UpdateManyMovieLikedByUserArgs } from "./args/UpdateManyMovieLikedByUserArgs";
import { UpdateOneMovieLikedByUserArgs } from "./args/UpdateOneMovieLikedByUserArgs";
import { UpsertOneMovieLikedByUserArgs } from "./args/UpsertOneMovieLikedByUserArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MovieLikedByUser } from "../../../models/MovieLikedByUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovieLikedByUser } from "../../outputs/AggregateMovieLikedByUser";
import { MovieLikedByUserGroupBy } from "../../outputs/MovieLikedByUserGroupBy";

@TypeGraphQL.Resolver(_of => MovieLikedByUser)
export class MovieLikedByUserCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieLikedByUser, {
    nullable: false
  })
  async aggregateMovieLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovieLikedByUserArgs): Promise<AggregateMovieLikedByUser> {
    return getPrismaFromContext(ctx).movieLikedByUser.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMovieLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyMovieLikedByUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieLikedByUser.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieLikedByUser, {
    nullable: false
  })
  async createOneMovieLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMovieLikedByUserArgs): Promise<MovieLikedByUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieLikedByUser.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMovieLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyMovieLikedByUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieLikedByUser.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieLikedByUser, {
    nullable: true
  })
  async deleteOneMovieLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMovieLikedByUserArgs): Promise<MovieLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieLikedByUser.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieLikedByUser, {
    nullable: true
  })
  async findFirstMovieLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieLikedByUserArgs): Promise<MovieLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieLikedByUser.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieLikedByUser, {
    nullable: true
  })
  async findFirstMovieLikedByUserOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieLikedByUserOrThrowArgs): Promise<MovieLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieLikedByUser.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieLikedByUser], {
    nullable: false
  })
  async movieLikedByUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMovieLikedByUserArgs): Promise<MovieLikedByUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieLikedByUser.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieLikedByUser, {
    nullable: true
  })
  async movieLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieLikedByUserArgs): Promise<MovieLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieLikedByUser.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieLikedByUser, {
    nullable: true
  })
  async getMovieLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieLikedByUserOrThrowArgs): Promise<MovieLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieLikedByUser.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieLikedByUserGroupBy], {
    nullable: false
  })
  async groupByMovieLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMovieLikedByUserArgs): Promise<MovieLikedByUserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieLikedByUser.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMovieLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyMovieLikedByUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieLikedByUser.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieLikedByUser, {
    nullable: true
  })
  async updateOneMovieLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMovieLikedByUserArgs): Promise<MovieLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieLikedByUser.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieLikedByUser, {
    nullable: false
  })
  async upsertOneMovieLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMovieLikedByUserArgs): Promise<MovieLikedByUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieLikedByUser.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
