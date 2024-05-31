import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateOrConnectWithoutStatsInput } from "../inputs/MovieListCreateOrConnectWithoutStatsInput";
import { MovieListCreateWithoutStatsInput } from "../inputs/MovieListCreateWithoutStatsInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListCreateNestedOneWithoutStatsInput", {})
export class MovieListCreateNestedOneWithoutStatsInput {
  @TypeGraphQL.Field(_type => MovieListCreateWithoutStatsInput, {
    nullable: true
  })
  create?: MovieListCreateWithoutStatsInput | undefined;

  @TypeGraphQL.Field(_type => MovieListCreateOrConnectWithoutStatsInput, {
    nullable: true
  })
  connectOrCreate?: MovieListCreateOrConnectWithoutStatsInput | undefined;

  @TypeGraphQL.Field(_type => MovieListWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieListWhereUniqueInput | undefined;
}
