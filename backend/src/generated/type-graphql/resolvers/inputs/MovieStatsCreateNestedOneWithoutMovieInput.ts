import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStatsCreateOrConnectWithoutMovieInput } from "../inputs/MovieStatsCreateOrConnectWithoutMovieInput";
import { MovieStatsCreateWithoutMovieInput } from "../inputs/MovieStatsCreateWithoutMovieInput";
import { MovieStatsWhereUniqueInput } from "../inputs/MovieStatsWhereUniqueInput";

@TypeGraphQL.InputType("MovieStatsCreateNestedOneWithoutMovieInput", {})
export class MovieStatsCreateNestedOneWithoutMovieInput {
  @TypeGraphQL.Field((_type) => MovieStatsCreateWithoutMovieInput, {
    nullable: true,
  })
  create?: MovieStatsCreateWithoutMovieInput | undefined;

  @TypeGraphQL.Field((_type) => MovieStatsCreateOrConnectWithoutMovieInput, {
    nullable: true,
  })
  connectOrCreate?: MovieStatsCreateOrConnectWithoutMovieInput | undefined;

  @TypeGraphQL.Field((_type) => MovieStatsWhereUniqueInput, {
    nullable: true,
  })
  connect?: MovieStatsWhereUniqueInput | undefined;
}
