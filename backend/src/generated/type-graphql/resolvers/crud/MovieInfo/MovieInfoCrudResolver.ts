import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieInfoArgs } from "./args/AggregateMovieInfoArgs";
import { CreateManyMovieInfoArgs } from "./args/CreateManyMovieInfoArgs";
import { CreateOneMovieInfoArgs } from "./args/CreateOneMovieInfoArgs";
import { DeleteManyMovieInfoArgs } from "./args/DeleteManyMovieInfoArgs";
import { DeleteOneMovieInfoArgs } from "./args/DeleteOneMovieInfoArgs";
import { FindFirstMovieInfoArgs } from "./args/FindFirstMovieInfoArgs";
import { FindFirstMovieInfoOrThrowArgs } from "./args/FindFirstMovieInfoOrThrowArgs";
import { FindManyMovieInfoArgs } from "./args/FindManyMovieInfoArgs";
import { FindUniqueMovieInfoArgs } from "./args/FindUniqueMovieInfoArgs";
import { FindUniqueMovieInfoOrThrowArgs } from "./args/FindUniqueMovieInfoOrThrowArgs";
import { GroupByMovieInfoArgs } from "./args/GroupByMovieInfoArgs";
import { UpdateManyMovieInfoArgs } from "./args/UpdateManyMovieInfoArgs";
import { UpdateOneMovieInfoArgs } from "./args/UpdateOneMovieInfoArgs";
import { UpsertOneMovieInfoArgs } from "./args/UpsertOneMovieInfoArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MovieInfo } from "../../../models/MovieInfo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovieInfo } from "../../outputs/AggregateMovieInfo";
import { MovieInfoGroupBy } from "../../outputs/MovieInfoGroupBy";

@TypeGraphQL.Resolver(_of => MovieInfo)
export class MovieInfoCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieInfo, {
    nullable: false
  })
  async aggregateMovieInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateMovieInfoArgs) args: AggregateMovieInfoArgs): Promise<AggregateMovieInfo> {
    return getPrismaFromContext(ctx).movieInfo.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMovieInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyMovieInfoArgs) args: CreateManyMovieInfoArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieInfo, {
    nullable: false
  })
  async createOneMovieInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateOneMovieInfoArgs) args: CreateOneMovieInfoArgs): Promise<MovieInfo> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMovieInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteManyMovieInfoArgs) args: DeleteManyMovieInfoArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieInfo, {
    nullable: true
  })
  async deleteOneMovieInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteOneMovieInfoArgs) args: DeleteOneMovieInfoArgs): Promise<MovieInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieInfo, {
    nullable: true
  })
  async findFirstMovieInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovieInfoArgs) args: FindFirstMovieInfoArgs): Promise<MovieInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieInfo, {
    nullable: true
  })
  async findFirstMovieInfoOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovieInfoOrThrowArgs) args: FindFirstMovieInfoOrThrowArgs): Promise<MovieInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieInfo], {
    nullable: false
  })
  async movieInfos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindManyMovieInfoArgs) args: FindManyMovieInfoArgs): Promise<MovieInfo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieInfo, {
    nullable: true
  })
  async movieInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieInfoArgs) args: FindUniqueMovieInfoArgs): Promise<MovieInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieInfo, {
    nullable: true
  })
  async getMovieInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieInfoOrThrowArgs) args: FindUniqueMovieInfoOrThrowArgs): Promise<MovieInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieInfoGroupBy], {
    nullable: false
  })
  async groupByMovieInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => GroupByMovieInfoArgs) args: GroupByMovieInfoArgs): Promise<MovieInfoGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMovieInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateManyMovieInfoArgs) args: UpdateManyMovieInfoArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieInfo, {
    nullable: true
  })
  async updateOneMovieInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateOneMovieInfoArgs) args: UpdateOneMovieInfoArgs): Promise<MovieInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieInfo, {
    nullable: false
  })
  async upsertOneMovieInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpsertOneMovieInfoArgs) args: UpsertOneMovieInfoArgs): Promise<MovieInfo> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
