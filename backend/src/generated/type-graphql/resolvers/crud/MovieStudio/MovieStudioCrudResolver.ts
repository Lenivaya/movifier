import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieStudioArgs } from "./args/AggregateMovieStudioArgs";
import { CreateManyMovieStudioArgs } from "./args/CreateManyMovieStudioArgs";
import { CreateOneMovieStudioArgs } from "./args/CreateOneMovieStudioArgs";
import { DeleteManyMovieStudioArgs } from "./args/DeleteManyMovieStudioArgs";
import { DeleteOneMovieStudioArgs } from "./args/DeleteOneMovieStudioArgs";
import { FindFirstMovieStudioArgs } from "./args/FindFirstMovieStudioArgs";
import { FindFirstMovieStudioOrThrowArgs } from "./args/FindFirstMovieStudioOrThrowArgs";
import { FindManyMovieStudioArgs } from "./args/FindManyMovieStudioArgs";
import { FindUniqueMovieStudioArgs } from "./args/FindUniqueMovieStudioArgs";
import { FindUniqueMovieStudioOrThrowArgs } from "./args/FindUniqueMovieStudioOrThrowArgs";
import { GroupByMovieStudioArgs } from "./args/GroupByMovieStudioArgs";
import { UpdateManyMovieStudioArgs } from "./args/UpdateManyMovieStudioArgs";
import { UpdateOneMovieStudioArgs } from "./args/UpdateOneMovieStudioArgs";
import { UpsertOneMovieStudioArgs } from "./args/UpsertOneMovieStudioArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MovieStudio } from "../../../models/MovieStudio";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovieStudio } from "../../outputs/AggregateMovieStudio";
import { MovieStudioGroupBy } from "../../outputs/MovieStudioGroupBy";

@TypeGraphQL.Resolver(_of => MovieStudio)
export class MovieStudioCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieStudio, {
    nullable: false
  })
  async aggregateMovieStudio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateMovieStudioArgs) args: AggregateMovieStudioArgs): Promise<AggregateMovieStudio> {
    return getPrismaFromContext(ctx).movieStudio.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMovieStudio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyMovieStudioArgs) args: CreateManyMovieStudioArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieStudio, {
    nullable: false
  })
  async createOneMovieStudio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateOneMovieStudioArgs) args: CreateOneMovieStudioArgs): Promise<MovieStudio> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMovieStudio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteManyMovieStudioArgs) args: DeleteManyMovieStudioArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieStudio, {
    nullable: true
  })
  async deleteOneMovieStudio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteOneMovieStudioArgs) args: DeleteOneMovieStudioArgs): Promise<MovieStudio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieStudio, {
    nullable: true
  })
  async findFirstMovieStudio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovieStudioArgs) args: FindFirstMovieStudioArgs): Promise<MovieStudio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieStudio, {
    nullable: true
  })
  async findFirstMovieStudioOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovieStudioOrThrowArgs) args: FindFirstMovieStudioOrThrowArgs): Promise<MovieStudio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieStudio], {
    nullable: false
  })
  async movieStudios(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindManyMovieStudioArgs) args: FindManyMovieStudioArgs): Promise<MovieStudio[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieStudio, {
    nullable: true
  })
  async movieStudio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieStudioArgs) args: FindUniqueMovieStudioArgs): Promise<MovieStudio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieStudio, {
    nullable: true
  })
  async getMovieStudio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieStudioOrThrowArgs) args: FindUniqueMovieStudioOrThrowArgs): Promise<MovieStudio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieStudioGroupBy], {
    nullable: false
  })
  async groupByMovieStudio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => GroupByMovieStudioArgs) args: GroupByMovieStudioArgs): Promise<MovieStudioGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMovieStudio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateManyMovieStudioArgs) args: UpdateManyMovieStudioArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieStudio, {
    nullable: true
  })
  async updateOneMovieStudio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateOneMovieStudioArgs) args: UpdateOneMovieStudioArgs): Promise<MovieStudio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieStudio, {
    nullable: false
  })
  async upsertOneMovieStudio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpsertOneMovieStudioArgs) args: UpsertOneMovieStudioArgs): Promise<MovieStudio> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStudio.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
