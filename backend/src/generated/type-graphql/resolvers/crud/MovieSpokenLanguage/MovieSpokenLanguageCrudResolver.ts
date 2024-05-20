import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieSpokenLanguageArgs } from "./args/AggregateMovieSpokenLanguageArgs";
import { CreateManyMovieSpokenLanguageArgs } from "./args/CreateManyMovieSpokenLanguageArgs";
import { CreateOneMovieSpokenLanguageArgs } from "./args/CreateOneMovieSpokenLanguageArgs";
import { DeleteManyMovieSpokenLanguageArgs } from "./args/DeleteManyMovieSpokenLanguageArgs";
import { DeleteOneMovieSpokenLanguageArgs } from "./args/DeleteOneMovieSpokenLanguageArgs";
import { FindFirstMovieSpokenLanguageArgs } from "./args/FindFirstMovieSpokenLanguageArgs";
import { FindFirstMovieSpokenLanguageOrThrowArgs } from "./args/FindFirstMovieSpokenLanguageOrThrowArgs";
import { FindManyMovieSpokenLanguageArgs } from "./args/FindManyMovieSpokenLanguageArgs";
import { FindUniqueMovieSpokenLanguageArgs } from "./args/FindUniqueMovieSpokenLanguageArgs";
import { FindUniqueMovieSpokenLanguageOrThrowArgs } from "./args/FindUniqueMovieSpokenLanguageOrThrowArgs";
import { GroupByMovieSpokenLanguageArgs } from "./args/GroupByMovieSpokenLanguageArgs";
import { UpdateManyMovieSpokenLanguageArgs } from "./args/UpdateManyMovieSpokenLanguageArgs";
import { UpdateOneMovieSpokenLanguageArgs } from "./args/UpdateOneMovieSpokenLanguageArgs";
import { UpsertOneMovieSpokenLanguageArgs } from "./args/UpsertOneMovieSpokenLanguageArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MovieSpokenLanguage } from "../../../models/MovieSpokenLanguage";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovieSpokenLanguage } from "../../outputs/AggregateMovieSpokenLanguage";
import { MovieSpokenLanguageGroupBy } from "../../outputs/MovieSpokenLanguageGroupBy";

@TypeGraphQL.Resolver(_of => MovieSpokenLanguage)
export class MovieSpokenLanguageCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieSpokenLanguage, {
    nullable: false
  })
  async aggregateMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateMovieSpokenLanguageArgs) args: AggregateMovieSpokenLanguageArgs): Promise<AggregateMovieSpokenLanguage> {
    return getPrismaFromContext(ctx).movieSpokenLanguage.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyMovieSpokenLanguageArgs) args: CreateManyMovieSpokenLanguageArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieSpokenLanguage, {
    nullable: false
  })
  async createOneMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateOneMovieSpokenLanguageArgs) args: CreateOneMovieSpokenLanguageArgs): Promise<MovieSpokenLanguage> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteManyMovieSpokenLanguageArgs) args: DeleteManyMovieSpokenLanguageArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieSpokenLanguage, {
    nullable: true
  })
  async deleteOneMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteOneMovieSpokenLanguageArgs) args: DeleteOneMovieSpokenLanguageArgs): Promise<MovieSpokenLanguage | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieSpokenLanguage, {
    nullable: true
  })
  async findFirstMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovieSpokenLanguageArgs) args: FindFirstMovieSpokenLanguageArgs): Promise<MovieSpokenLanguage | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieSpokenLanguage, {
    nullable: true
  })
  async findFirstMovieSpokenLanguageOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstMovieSpokenLanguageOrThrowArgs) args: FindFirstMovieSpokenLanguageOrThrowArgs): Promise<MovieSpokenLanguage | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieSpokenLanguage], {
    nullable: false
  })
  async movieSpokenLanguages(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindManyMovieSpokenLanguageArgs) args: FindManyMovieSpokenLanguageArgs): Promise<MovieSpokenLanguage[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieSpokenLanguage, {
    nullable: true
  })
  async movieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieSpokenLanguageArgs) args: FindUniqueMovieSpokenLanguageArgs): Promise<MovieSpokenLanguage | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MovieSpokenLanguage, {
    nullable: true
  })
  async getMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieSpokenLanguageOrThrowArgs) args: FindUniqueMovieSpokenLanguageOrThrowArgs): Promise<MovieSpokenLanguage | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MovieSpokenLanguageGroupBy], {
    nullable: false
  })
  async groupByMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => GroupByMovieSpokenLanguageArgs) args: GroupByMovieSpokenLanguageArgs): Promise<MovieSpokenLanguageGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateManyMovieSpokenLanguageArgs) args: UpdateManyMovieSpokenLanguageArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieSpokenLanguage, {
    nullable: true
  })
  async updateOneMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateOneMovieSpokenLanguageArgs) args: UpdateOneMovieSpokenLanguageArgs): Promise<MovieSpokenLanguage | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MovieSpokenLanguage, {
    nullable: false
  })
  async upsertOneMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpsertOneMovieSpokenLanguageArgs) args: UpsertOneMovieSpokenLanguageArgs): Promise<MovieSpokenLanguage> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
