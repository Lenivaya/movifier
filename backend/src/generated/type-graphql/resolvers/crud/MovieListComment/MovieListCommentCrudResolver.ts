import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieListCommentArgs } from "./args/AggregateMovieListCommentArgs";
import { CreateManyMovieListCommentArgs } from "./args/CreateManyMovieListCommentArgs";
import { CreateOneMovieListCommentArgs } from "./args/CreateOneMovieListCommentArgs";
import { DeleteManyMovieListCommentArgs } from "./args/DeleteManyMovieListCommentArgs";
import { DeleteOneMovieListCommentArgs } from "./args/DeleteOneMovieListCommentArgs";
import { FindFirstMovieListCommentArgs } from "./args/FindFirstMovieListCommentArgs";
import { FindFirstMovieListCommentOrThrowArgs } from "./args/FindFirstMovieListCommentOrThrowArgs";
import { FindManyMovieListCommentArgs } from "./args/FindManyMovieListCommentArgs";
import { FindUniqueMovieListCommentArgs } from "./args/FindUniqueMovieListCommentArgs";
import { FindUniqueMovieListCommentOrThrowArgs } from "./args/FindUniqueMovieListCommentOrThrowArgs";
import { GroupByMovieListCommentArgs } from "./args/GroupByMovieListCommentArgs";
import { UpdateManyMovieListCommentArgs } from "./args/UpdateManyMovieListCommentArgs";
import { UpdateOneMovieListCommentArgs } from "./args/UpdateOneMovieListCommentArgs";
import { UpsertOneMovieListCommentArgs } from "./args/UpsertOneMovieListCommentArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MovieListComment } from "../../../models/MovieListComment";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovieListComment } from "../../outputs/AggregateMovieListComment";
import { MovieListCommentGroupBy } from "../../outputs/MovieListCommentGroupBy";

@TypeGraphQL.Resolver(_of => MovieListComment)
export class MovieListCommentCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieListComment, {
    nullable: false
  })
  async aggregateMovieListComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateMovieListCommentArgs) args: AggregateMovieListCommentArgs): Promise<AggregateMovieListComment> {
    return getPrismaFromContext(ctx).movieListComment.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMovieListComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyMovieListCommentArgs) args: CreateManyMovieListCommentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieListComment, {
    nullable: false
  })
  async createOneMovieListComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateOneMovieListCommentArgs) args: CreateOneMovieListCommentArgs): Promise<MovieListComment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMovieListComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteManyMovieListCommentArgs) args: DeleteManyMovieListCommentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieListComment, {
    nullable: true
  })
  async deleteOneMovieListComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteOneMovieListCommentArgs) args: DeleteOneMovieListCommentArgs): Promise<MovieListComment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieListComment, {
    nullable: true
  })
  async findFirstMovieListComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovieListCommentArgs) args: FindFirstMovieListCommentArgs): Promise<MovieListComment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieListComment, {
    nullable: true
  })
  async findFirstMovieListCommentOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovieListCommentOrThrowArgs) args: FindFirstMovieListCommentOrThrowArgs): Promise<MovieListComment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieListComment], {
    nullable: false
  })
  async movieListComments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindManyMovieListCommentArgs) args: FindManyMovieListCommentArgs): Promise<MovieListComment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieListComment, {
    nullable: true
  })
  async movieListComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieListCommentArgs) args: FindUniqueMovieListCommentArgs): Promise<MovieListComment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieListComment, {
    nullable: true
  })
  async getMovieListComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieListCommentOrThrowArgs) args: FindUniqueMovieListCommentOrThrowArgs): Promise<MovieListComment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieListCommentGroupBy], {
    nullable: false
  })
  async groupByMovieListComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => GroupByMovieListCommentArgs) args: GroupByMovieListCommentArgs): Promise<MovieListCommentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMovieListComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateManyMovieListCommentArgs) args: UpdateManyMovieListCommentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieListComment, {
    nullable: true
  })
  async updateOneMovieListComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateOneMovieListCommentArgs) args: UpdateOneMovieListCommentArgs): Promise<MovieListComment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieListComment, {
    nullable: false
  })
  async upsertOneMovieListComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpsertOneMovieListCommentArgs) args: UpsertOneMovieListCommentArgs): Promise<MovieListComment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
