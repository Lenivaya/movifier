import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieCrewMemberTypeArgs } from "./args/AggregateMovieCrewMemberTypeArgs";
import { MovieCrewMemberType } from "../../../models/MovieCrewMemberType";
import { AggregateMovieCrewMemberType } from "../../outputs/AggregateMovieCrewMemberType";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieCrewMemberType)
export class AggregateMovieCrewMemberTypeResolver {
  @TypeGraphQL.Query((_returns) => AggregateMovieCrewMemberType, {
    nullable: false,
  })
  async aggregateMovieCrewMemberType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => AggregateMovieCrewMemberTypeArgs)
    args: AggregateMovieCrewMemberTypeArgs,
  ): Promise<AggregateMovieCrewMemberType> {
    return getPrismaFromContext(ctx).movieCrewMemberType.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
