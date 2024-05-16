import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieCrewMemberTypeArgs } from "./args/FindUniqueMovieCrewMemberTypeArgs";
import { MovieCrewMemberType } from "@/generated/type-graphql/models/MovieCrewMemberType";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieCrewMemberType)
export class FindUniqueMovieCrewMemberTypeResolver {
  @TypeGraphQL.Query((_returns) => MovieCrewMemberType, {
    nullable: true,
  })
  async movieCrewMemberType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieCrewMemberTypeArgs)
    args: FindUniqueMovieCrewMemberTypeArgs,
  ): Promise<MovieCrewMemberType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
