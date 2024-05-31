import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutMovieStatsInput } from "../inputs/MovieCreateOrConnectWithoutMovieStatsInput";
import { MovieCreateWithoutMovieStatsInput } from "../inputs/MovieCreateWithoutMovieStatsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateNestedOneWithoutMovieStatsInput", {})
export class MovieCreateNestedOneWithoutMovieStatsInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutMovieStatsInput, {
    nullable: true
  })
  create?: MovieCreateWithoutMovieStatsInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutMovieStatsInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutMovieStatsInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;
}
