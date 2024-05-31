import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStatsCreateOrConnectWithoutMovieInput } from "../inputs/MovieStatsCreateOrConnectWithoutMovieInput";
import { MovieStatsCreateWithoutMovieInput } from "../inputs/MovieStatsCreateWithoutMovieInput";
import { MovieStatsUpdateToOneWithWhereWithoutMovieInput } from "../inputs/MovieStatsUpdateToOneWithWhereWithoutMovieInput";
import { MovieStatsUpsertWithoutMovieInput } from "../inputs/MovieStatsUpsertWithoutMovieInput";
import { MovieStatsWhereInput } from "../inputs/MovieStatsWhereInput";
import { MovieStatsWhereUniqueInput } from "../inputs/MovieStatsWhereUniqueInput";

@TypeGraphQL.InputType("MovieStatsUpdateOneWithoutMovieNestedInput", {})
export class MovieStatsUpdateOneWithoutMovieNestedInput {
  @TypeGraphQL.Field(_type => MovieStatsCreateWithoutMovieInput, {
    nullable: true
  })
  create?: MovieStatsCreateWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => MovieStatsCreateOrConnectWithoutMovieInput, {
    nullable: true
  })
  connectOrCreate?: MovieStatsCreateOrConnectWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => MovieStatsUpsertWithoutMovieInput, {
    nullable: true
  })
  upsert?: MovieStatsUpsertWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => MovieStatsWhereInput, {
    nullable: true
  })
  disconnect?: MovieStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieStatsWhereInput, {
    nullable: true
  })
  delete?: MovieStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieStatsWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieStatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovieStatsUpdateToOneWithWhereWithoutMovieInput, {
    nullable: true
  })
  update?: MovieStatsUpdateToOneWithWhereWithoutMovieInput | undefined;
}
