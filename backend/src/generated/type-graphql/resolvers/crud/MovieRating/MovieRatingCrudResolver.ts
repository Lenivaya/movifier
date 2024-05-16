import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieRatingArgs } from "./args/AggregateMovieRatingArgs";
import { CreateManyMovieRatingArgs } from "./args/CreateManyMovieRatingArgs";
import { CreateOneMovieRatingArgs } from "./args/CreateOneMovieRatingArgs";
import { DeleteManyMovieRatingArgs } from "./args/DeleteManyMovieRatingArgs";
import { DeleteOneMovieRatingArgs } from "./args/DeleteOneMovieRatingArgs";
import { FindFirstMovieRatingArgs } from "./args/FindFirstMovieRatingArgs";
import { FindFirstMovieRatingOrThrowArgs } from "./args/FindFirstMovieRatingOrThrowArgs";
import { FindManyMovieRatingArgs } from "./args/FindManyMovieRatingArgs";
import { FindUniqueMovieRatingArgs } from "./args/FindUniqueMovieRatingArgs";
import { FindUniqueMovieRatingOrThrowArgs } from "./args/FindUniqueMovieRatingOrThrowArgs";
import { GroupByMovieRatingArgs } from "./args/GroupByMovieRatingArgs";
import { UpdateManyMovieRatingArgs } from "./args/UpdateManyMovieRatingArgs";
import { UpdateOneMovieRatingArgs } from "./args/UpdateOneMovieRatingArgs";
import { UpsertOneMovieRatingArgs } from "./args/UpsertOneMovieRatingArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { MovieRating } from "@/generated/type-graphql/models/MovieRating";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovieRating } from "../../outputs/AggregateMovieRating";
import { MovieRatingGroupBy } from "../../outputs/MovieRatingGroupBy";

@TypeGraphQL.Resolver((_of) => MovieRating)
export class MovieRatingCrudResolver {
  @TypeGraphQL.Query((_returns) => AggregateMovieRating, {
    nullable: false,
  })
  async aggregateMovieRating(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => AggregateMovieRatingArgs)
    args: AggregateMovieRatingArgs,
  ): Promise<AggregateMovieRating> {
    return getPrismaFromContext(ctx).movieRating.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMovieRating(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateManyMovieRatingArgs)
    args: CreateManyMovieRatingArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieRating, {
    nullable: false,
  })
  async createOneMovieRating(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateOneMovieRatingArgs)
    args: CreateOneMovieRatingArgs,
  ): Promise<MovieRating> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyMovieRating(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => DeleteManyMovieRatingArgs)
    args: DeleteManyMovieRatingArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieRating, {
    nullable: true,
  })
  async deleteOneMovieRating(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => DeleteOneMovieRatingArgs)
    args: DeleteOneMovieRatingArgs,
  ): Promise<MovieRating | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieRating, {
    nullable: true,
  })
  async findFirstMovieRating(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieRatingArgs)
    args: FindFirstMovieRatingArgs,
  ): Promise<MovieRating | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieRating, {
    nullable: true,
  })
  async findFirstMovieRatingOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieRatingOrThrowArgs)
    args: FindFirstMovieRatingOrThrowArgs,
  ): Promise<MovieRating | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MovieRating], {
    nullable: false,
  })
  async movieRatings(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindManyMovieRatingArgs)
    args: FindManyMovieRatingArgs,
  ): Promise<MovieRating[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieRating, {
    nullable: true,
  })
  async movieRating(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieRatingArgs)
    args: FindUniqueMovieRatingArgs,
  ): Promise<MovieRating | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieRating, {
    nullable: true,
  })
  async getMovieRating(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieRatingOrThrowArgs)
    args: FindUniqueMovieRatingOrThrowArgs,
  ): Promise<MovieRating | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MovieRatingGroupBy], {
    nullable: false,
  })
  async groupByMovieRating(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => GroupByMovieRatingArgs)
    args: GroupByMovieRatingArgs,
  ): Promise<MovieRatingGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.groupBy({
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
  async updateManyMovieRating(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpdateManyMovieRatingArgs)
    args: UpdateManyMovieRatingArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieRating, {
    nullable: true,
  })
  async updateOneMovieRating(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpdateOneMovieRatingArgs)
    args: UpdateOneMovieRatingArgs,
  ): Promise<MovieRating | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieRating, {
    nullable: false,
  })
  async upsertOneMovieRating(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpsertOneMovieRatingArgs)
    args: UpsertOneMovieRatingArgs,
  ): Promise<MovieRating> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
