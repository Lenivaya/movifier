import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieCrewMemberOrThrowArgs } from "./args/FindUniqueMovieCrewMemberOrThrowArgs";
import { MovieCrewMember } from "@/generated/type-graphql/models/MovieCrewMember";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieCrewMember)
export class FindUniqueMovieCrewMemberOrThrowResolver {
  @TypeGraphQL.Query((_returns) => MovieCrewMember, {
    nullable: true,
  })
  async getMovieCrewMember(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieCrewMemberOrThrowArgs)
    args: FindUniqueMovieCrewMemberOrThrowArgs,
  ): Promise<MovieCrewMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
