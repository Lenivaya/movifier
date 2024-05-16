import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMovieCrewMemberTypeArgs } from "./args/CreateOneMovieCrewMemberTypeArgs";
import { MovieCrewMemberType } from "@/generated/type-graphql/models/MovieCrewMemberType";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieCrewMemberType)
export class CreateOneMovieCrewMemberTypeResolver {
  @TypeGraphQL.Mutation((_returns) => MovieCrewMemberType, {
    nullable: false,
  })
  async createOneMovieCrewMemberType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateOneMovieCrewMemberTypeArgs)
    args: CreateOneMovieCrewMemberTypeArgs,
  ): Promise<MovieCrewMemberType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
