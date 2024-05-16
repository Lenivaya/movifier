import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGenreArgs } from "./args/AggregateGenreArgs";
import { Genre } from "@/generated/type-graphql/models/Genre";
import { AggregateGenre } from "../../outputs/AggregateGenre";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Genre)
export class AggregateGenreResolver {
  @TypeGraphQL.Query((_returns) => AggregateGenre, {
    nullable: false,
  })
  async aggregateGenre(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => AggregateGenreArgs) args: AggregateGenreArgs,
  ): Promise<AggregateGenre> {
    return getPrismaFromContext(ctx).genre.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
