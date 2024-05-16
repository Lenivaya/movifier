import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMovieCrewMemberTypeArgs } from "./args/FindManyMovieCrewMemberTypeArgs";
import { MovieCrewMemberType } from "@/generated/type-graphql/models/MovieCrewMemberType";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieCrewMemberType)
export class FindManyMovieCrewMemberTypeResolver {
  @TypeGraphQL.Query((_returns) => [MovieCrewMemberType], {
    nullable: false,
  })
  async movieCrewMemberTypes(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindManyMovieCrewMemberTypeArgs)
    args: FindManyMovieCrewMemberTypeArgs,
  ): Promise<MovieCrewMemberType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
