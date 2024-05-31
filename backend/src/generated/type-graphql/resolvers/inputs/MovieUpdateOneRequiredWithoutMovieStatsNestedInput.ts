import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutMovieStatsInput } from "../inputs/MovieCreateOrConnectWithoutMovieStatsInput";
import { MovieCreateWithoutMovieStatsInput } from "../inputs/MovieCreateWithoutMovieStatsInput";
import { MovieUpdateToOneWithWhereWithoutMovieStatsInput } from "../inputs/MovieUpdateToOneWithWhereWithoutMovieStatsInput";
import { MovieUpsertWithoutMovieStatsInput } from "../inputs/MovieUpsertWithoutMovieStatsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateOneRequiredWithoutMovieStatsNestedInput", {})
export class MovieUpdateOneRequiredWithoutMovieStatsNestedInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutMovieStatsInput, {
    nullable: true
  })
  create?: MovieCreateWithoutMovieStatsInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutMovieStatsInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutMovieStatsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpsertWithoutMovieStatsInput, {
    nullable: true
  })
  upsert?: MovieUpsertWithoutMovieStatsInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateToOneWithWhereWithoutMovieStatsInput, {
    nullable: true
  })
  update?: MovieUpdateToOneWithWhereWithoutMovieStatsInput | undefined;
}
