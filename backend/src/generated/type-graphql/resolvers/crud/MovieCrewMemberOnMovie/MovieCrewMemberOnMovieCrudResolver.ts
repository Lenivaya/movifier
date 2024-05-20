import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieCrewMemberOnMovieArgs } from "./args/AggregateMovieCrewMemberOnMovieArgs";
import { CreateManyMovieCrewMemberOnMovieArgs } from "./args/CreateManyMovieCrewMemberOnMovieArgs";
import { CreateOneMovieCrewMemberOnMovieArgs } from "./args/CreateOneMovieCrewMemberOnMovieArgs";
import { DeleteManyMovieCrewMemberOnMovieArgs } from "./args/DeleteManyMovieCrewMemberOnMovieArgs";
import { DeleteOneMovieCrewMemberOnMovieArgs } from "./args/DeleteOneMovieCrewMemberOnMovieArgs";
import { FindFirstMovieCrewMemberOnMovieArgs } from "./args/FindFirstMovieCrewMemberOnMovieArgs";
import { FindFirstMovieCrewMemberOnMovieOrThrowArgs } from "./args/FindFirstMovieCrewMemberOnMovieOrThrowArgs";
import { FindManyMovieCrewMemberOnMovieArgs } from "./args/FindManyMovieCrewMemberOnMovieArgs";
import { FindUniqueMovieCrewMemberOnMovieArgs } from "./args/FindUniqueMovieCrewMemberOnMovieArgs";
import { FindUniqueMovieCrewMemberOnMovieOrThrowArgs } from "./args/FindUniqueMovieCrewMemberOnMovieOrThrowArgs";
import { GroupByMovieCrewMemberOnMovieArgs } from "./args/GroupByMovieCrewMemberOnMovieArgs";
import { UpdateManyMovieCrewMemberOnMovieArgs } from "./args/UpdateManyMovieCrewMemberOnMovieArgs";
import { UpdateOneMovieCrewMemberOnMovieArgs } from "./args/UpdateOneMovieCrewMemberOnMovieArgs";
import { UpsertOneMovieCrewMemberOnMovieArgs } from "./args/UpsertOneMovieCrewMemberOnMovieArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MovieCrewMemberOnMovie } from "../../../models/MovieCrewMemberOnMovie";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovieCrewMemberOnMovie } from "../../outputs/AggregateMovieCrewMemberOnMovie";
import { MovieCrewMemberOnMovieGroupBy } from "../../outputs/MovieCrewMemberOnMovieGroupBy";

@TypeGraphQL.Resolver(_of => MovieCrewMemberOnMovie)
export class MovieCrewMemberOnMovieCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieCrewMemberOnMovie, {
    nullable: false
  })
  async aggregateMovieCrewMemberOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateMovieCrewMemberOnMovieArgs) args: AggregateMovieCrewMemberOnMovieArgs): Promise<AggregateMovieCrewMemberOnMovie> {
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMovieCrewMemberOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyMovieCrewMemberOnMovieArgs) args: CreateManyMovieCrewMemberOnMovieArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieCrewMemberOnMovie, {
    nullable: false
  })
  async createOneMovieCrewMemberOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateOneMovieCrewMemberOnMovieArgs) args: CreateOneMovieCrewMemberOnMovieArgs): Promise<MovieCrewMemberOnMovie> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMovieCrewMemberOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteManyMovieCrewMemberOnMovieArgs) args: DeleteManyMovieCrewMemberOnMovieArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieCrewMemberOnMovie, {
    nullable: true
  })
  async deleteOneMovieCrewMemberOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteOneMovieCrewMemberOnMovieArgs) args: DeleteOneMovieCrewMemberOnMovieArgs): Promise<MovieCrewMemberOnMovie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieCrewMemberOnMovie, {
    nullable: true
  })
  async findFirstMovieCrewMemberOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovieCrewMemberOnMovieArgs) args: FindFirstMovieCrewMemberOnMovieArgs): Promise<MovieCrewMemberOnMovie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieCrewMemberOnMovie, {
    nullable: true
  })
  async findFirstMovieCrewMemberOnMovieOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovieCrewMemberOnMovieOrThrowArgs) args: FindFirstMovieCrewMemberOnMovieOrThrowArgs): Promise<MovieCrewMemberOnMovie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieCrewMemberOnMovie], {
    nullable: false
  })
  async movieCrewMemberOnMovies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindManyMovieCrewMemberOnMovieArgs) args: FindManyMovieCrewMemberOnMovieArgs): Promise<MovieCrewMemberOnMovie[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieCrewMemberOnMovie, {
    nullable: true
  })
  async movieCrewMemberOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieCrewMemberOnMovieArgs) args: FindUniqueMovieCrewMemberOnMovieArgs): Promise<MovieCrewMemberOnMovie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieCrewMemberOnMovie, {
    nullable: true
  })
  async getMovieCrewMemberOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieCrewMemberOnMovieOrThrowArgs) args: FindUniqueMovieCrewMemberOnMovieOrThrowArgs): Promise<MovieCrewMemberOnMovie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieCrewMemberOnMovieGroupBy], {
    nullable: false
  })
  async groupByMovieCrewMemberOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => GroupByMovieCrewMemberOnMovieArgs) args: GroupByMovieCrewMemberOnMovieArgs): Promise<MovieCrewMemberOnMovieGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMovieCrewMemberOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateManyMovieCrewMemberOnMovieArgs) args: UpdateManyMovieCrewMemberOnMovieArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieCrewMemberOnMovie, {
    nullable: true
  })
  async updateOneMovieCrewMemberOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateOneMovieCrewMemberOnMovieArgs) args: UpdateOneMovieCrewMemberOnMovieArgs): Promise<MovieCrewMemberOnMovie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieCrewMemberOnMovie, {
    nullable: false
  })
  async upsertOneMovieCrewMemberOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpsertOneMovieCrewMemberOnMovieArgs) args: UpsertOneMovieCrewMemberOnMovieArgs): Promise<MovieCrewMemberOnMovie> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
