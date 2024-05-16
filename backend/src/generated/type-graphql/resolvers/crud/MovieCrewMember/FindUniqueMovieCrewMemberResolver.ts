import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieCrewMemberArgs } from "./args/FindUniqueMovieCrewMemberArgs";
import { MovieCrewMember } from "@/generated/type-graphql/models/MovieCrewMember";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieCrewMember)
export class FindUniqueMovieCrewMemberResolver {
  @TypeGraphQL.Query((_returns) => MovieCrewMember, {
    nullable: true,
  })
  async movieCrewMember(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieCrewMemberArgs)
    args: FindUniqueMovieCrewMemberArgs,
  ): Promise<MovieCrewMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
