import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMovieCrewMemberArgs } from "./args/CreateOneMovieCrewMemberArgs";
import { MovieCrewMember } from "@/generated/type-graphql/models/MovieCrewMember";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieCrewMember)
export class CreateOneMovieCrewMemberResolver {
  @TypeGraphQL.Mutation((_returns) => MovieCrewMember, {
    nullable: false,
  })
  async createOneMovieCrewMember(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateOneMovieCrewMemberArgs)
    args: CreateOneMovieCrewMemberArgs,
  ): Promise<MovieCrewMember> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
