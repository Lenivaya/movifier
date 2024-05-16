import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieCrewMemberOrThrowArgs } from "./args/FindFirstMovieCrewMemberOrThrowArgs";
import { MovieCrewMember } from "@/generated/type-graphql/models/MovieCrewMember";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieCrewMember)
export class FindFirstMovieCrewMemberOrThrowResolver {
  @TypeGraphQL.Query((_returns) => MovieCrewMember, {
    nullable: true,
  })
  async findFirstMovieCrewMemberOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieCrewMemberOrThrowArgs)
    args: FindFirstMovieCrewMemberOrThrowArgs,
  ): Promise<MovieCrewMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
