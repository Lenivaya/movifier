import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MovieListStatsAvgAggregate", {})
export class MovieListStatsAvgAggregate {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  views!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  likes!: number | null;
}
