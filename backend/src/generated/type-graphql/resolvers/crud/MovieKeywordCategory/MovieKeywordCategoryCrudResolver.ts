import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieKeywordCategoryArgs } from "./args/AggregateMovieKeywordCategoryArgs";
import { CreateManyMovieKeywordCategoryArgs } from "./args/CreateManyMovieKeywordCategoryArgs";
import { CreateOneMovieKeywordCategoryArgs } from "./args/CreateOneMovieKeywordCategoryArgs";
import { DeleteManyMovieKeywordCategoryArgs } from "./args/DeleteManyMovieKeywordCategoryArgs";
import { DeleteOneMovieKeywordCategoryArgs } from "./args/DeleteOneMovieKeywordCategoryArgs";
import { FindFirstMovieKeywordCategoryArgs } from "./args/FindFirstMovieKeywordCategoryArgs";
import { FindFirstMovieKeywordCategoryOrThrowArgs } from "./args/FindFirstMovieKeywordCategoryOrThrowArgs";
import { FindManyMovieKeywordCategoryArgs } from "./args/FindManyMovieKeywordCategoryArgs";
import { FindUniqueMovieKeywordCategoryArgs } from "./args/FindUniqueMovieKeywordCategoryArgs";
import { FindUniqueMovieKeywordCategoryOrThrowArgs } from "./args/FindUniqueMovieKeywordCategoryOrThrowArgs";
import { GroupByMovieKeywordCategoryArgs } from "./args/GroupByMovieKeywordCategoryArgs";
import { UpdateManyMovieKeywordCategoryArgs } from "./args/UpdateManyMovieKeywordCategoryArgs";
import { UpdateOneMovieKeywordCategoryArgs } from "./args/UpdateOneMovieKeywordCategoryArgs";
import { UpsertOneMovieKeywordCategoryArgs } from "./args/UpsertOneMovieKeywordCategoryArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MovieKeywordCategory } from "../../../models/MovieKeywordCategory";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovieKeywordCategory } from "../../outputs/AggregateMovieKeywordCategory";
import { MovieKeywordCategoryGroupBy } from "../../outputs/MovieKeywordCategoryGroupBy";

@TypeGraphQL.Resolver(_of => MovieKeywordCategory)
export class MovieKeywordCategoryCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieKeywordCategory, {
    nullable: false
  })
  async aggregateMovieKeywordCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovieKeywordCategoryArgs): Promise<AggregateMovieKeywordCategory> {
    return getPrismaFromContext(ctx).movieKeywordCategory.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMovieKeywordCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyMovieKeywordCategoryArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieKeywordCategory, {
    nullable: false
  })
  async createOneMovieKeywordCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMovieKeywordCategoryArgs): Promise<MovieKeywordCategory> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMovieKeywordCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyMovieKeywordCategoryArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieKeywordCategory, {
    nullable: true
  })
  async deleteOneMovieKeywordCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMovieKeywordCategoryArgs): Promise<MovieKeywordCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieKeywordCategory, {
    nullable: true
  })
  async findFirstMovieKeywordCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieKeywordCategoryArgs): Promise<MovieKeywordCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieKeywordCategory, {
    nullable: true
  })
  async findFirstMovieKeywordCategoryOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieKeywordCategoryOrThrowArgs): Promise<MovieKeywordCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieKeywordCategory], {
    nullable: false
  })
  async movieKeywordCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMovieKeywordCategoryArgs): Promise<MovieKeywordCategory[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieKeywordCategory, {
    nullable: true
  })
  async movieKeywordCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieKeywordCategoryArgs): Promise<MovieKeywordCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieKeywordCategory, {
    nullable: true
  })
  async getMovieKeywordCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieKeywordCategoryOrThrowArgs): Promise<MovieKeywordCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieKeywordCategoryGroupBy], {
    nullable: false
  })
  async groupByMovieKeywordCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMovieKeywordCategoryArgs): Promise<MovieKeywordCategoryGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMovieKeywordCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyMovieKeywordCategoryArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieKeywordCategory, {
    nullable: true
  })
  async updateOneMovieKeywordCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMovieKeywordCategoryArgs): Promise<MovieKeywordCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieKeywordCategory, {
    nullable: false
  })
  async upsertOneMovieKeywordCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMovieKeywordCategoryArgs): Promise<MovieKeywordCategory> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
