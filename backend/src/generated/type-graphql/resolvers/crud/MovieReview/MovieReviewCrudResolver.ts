import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieReviewArgs } from "./args/AggregateMovieReviewArgs";
import { CreateManyMovieReviewArgs } from "./args/CreateManyMovieReviewArgs";
import { CreateOneMovieReviewArgs } from "./args/CreateOneMovieReviewArgs";
import { DeleteManyMovieReviewArgs } from "./args/DeleteManyMovieReviewArgs";
import { DeleteOneMovieReviewArgs } from "./args/DeleteOneMovieReviewArgs";
import { FindFirstMovieReviewArgs } from "./args/FindFirstMovieReviewArgs";
import { FindFirstMovieReviewOrThrowArgs } from "./args/FindFirstMovieReviewOrThrowArgs";
import { FindManyMovieReviewArgs } from "./args/FindManyMovieReviewArgs";
import { FindUniqueMovieReviewArgs } from "./args/FindUniqueMovieReviewArgs";
import { FindUniqueMovieReviewOrThrowArgs } from "./args/FindUniqueMovieReviewOrThrowArgs";
import { GroupByMovieReviewArgs } from "./args/GroupByMovieReviewArgs";
import { UpdateManyMovieReviewArgs } from "./args/UpdateManyMovieReviewArgs";
import { UpdateOneMovieReviewArgs } from "./args/UpdateOneMovieReviewArgs";
import { UpsertOneMovieReviewArgs } from "./args/UpsertOneMovieReviewArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MovieReview } from "../../../models/MovieReview";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovieReview } from "../../outputs/AggregateMovieReview";
import { MovieReviewGroupBy } from "../../outputs/MovieReviewGroupBy";

@TypeGraphQL.Resolver(_of => MovieReview)
export class MovieReviewCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieReview, {
    nullable: false
  })
  async aggregateMovieReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateMovieReviewArgs) args: AggregateMovieReviewArgs): Promise<AggregateMovieReview> {
    return getPrismaFromContext(ctx).movieReview.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMovieReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyMovieReviewArgs) args: CreateManyMovieReviewArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieReview, {
    nullable: false
  })
  async createOneMovieReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateOneMovieReviewArgs) args: CreateOneMovieReviewArgs): Promise<MovieReview> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMovieReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteManyMovieReviewArgs) args: DeleteManyMovieReviewArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieReview, {
    nullable: true
  })
  async deleteOneMovieReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteOneMovieReviewArgs) args: DeleteOneMovieReviewArgs): Promise<MovieReview | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieReview, {
    nullable: true
  })
  async findFirstMovieReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovieReviewArgs) args: FindFirstMovieReviewArgs): Promise<MovieReview | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieReview, {
    nullable: true
  })
  async findFirstMovieReviewOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovieReviewOrThrowArgs) args: FindFirstMovieReviewOrThrowArgs): Promise<MovieReview | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieReview], {
    nullable: false
  })
  async movieReviews(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindManyMovieReviewArgs) args: FindManyMovieReviewArgs): Promise<MovieReview[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieReview, {
    nullable: true
  })
  async movieReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieReviewArgs) args: FindUniqueMovieReviewArgs): Promise<MovieReview | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieReview, {
    nullable: true
  })
  async getMovieReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieReviewOrThrowArgs) args: FindUniqueMovieReviewOrThrowArgs): Promise<MovieReview | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieReviewGroupBy], {
    nullable: false
  })
  async groupByMovieReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => GroupByMovieReviewArgs) args: GroupByMovieReviewArgs): Promise<MovieReviewGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMovieReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateManyMovieReviewArgs) args: UpdateManyMovieReviewArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieReview, {
    nullable: true
  })
  async updateOneMovieReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateOneMovieReviewArgs) args: UpdateOneMovieReviewArgs): Promise<MovieReview | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieReview, {
    nullable: false
  })
  async upsertOneMovieReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpsertOneMovieReviewArgs) args: UpsertOneMovieReviewArgs): Promise<MovieReview> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
