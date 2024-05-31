import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateOrConnectWithoutStatsInput } from "../inputs/MovieListCreateOrConnectWithoutStatsInput";
import { MovieListCreateWithoutStatsInput } from "../inputs/MovieListCreateWithoutStatsInput";
import { MovieListUpdateToOneWithWhereWithoutStatsInput } from "../inputs/MovieListUpdateToOneWithWhereWithoutStatsInput";
import { MovieListUpsertWithoutStatsInput } from "../inputs/MovieListUpsertWithoutStatsInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListUpdateOneRequiredWithoutStatsNestedInput", {})
export class MovieListUpdateOneRequiredWithoutStatsNestedInput {
  @TypeGraphQL.Field(_type => MovieListCreateWithoutStatsInput, {
    nullable: true
  })
  create?: MovieListCreateWithoutStatsInput | undefined;

  @TypeGraphQL.Field(_type => MovieListCreateOrConnectWithoutStatsInput, {
    nullable: true
  })
  connectOrCreate?: MovieListCreateOrConnectWithoutStatsInput | undefined;

  @TypeGraphQL.Field(_type => MovieListUpsertWithoutStatsInput, {
    nullable: true
  })
  upsert?: MovieListUpsertWithoutStatsInput | undefined;

  @TypeGraphQL.Field(_type => MovieListWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieListWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovieListUpdateToOneWithWhereWithoutStatsInput, {
    nullable: true
  })
  update?: MovieListUpdateToOneWithWhereWithoutStatsInput | undefined;
}
