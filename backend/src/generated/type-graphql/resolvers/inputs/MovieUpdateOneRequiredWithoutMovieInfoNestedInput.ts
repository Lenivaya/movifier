import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutMovieInfoInput } from "../inputs/MovieCreateOrConnectWithoutMovieInfoInput";
import { MovieCreateWithoutMovieInfoInput } from "../inputs/MovieCreateWithoutMovieInfoInput";
import { MovieUpdateToOneWithWhereWithoutMovieInfoInput } from "../inputs/MovieUpdateToOneWithWhereWithoutMovieInfoInput";
import { MovieUpsertWithoutMovieInfoInput } from "../inputs/MovieUpsertWithoutMovieInfoInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateOneRequiredWithoutMovieInfoNestedInput", {})
export class MovieUpdateOneRequiredWithoutMovieInfoNestedInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutMovieInfoInput, {
    nullable: true
  })
  create?: MovieCreateWithoutMovieInfoInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutMovieInfoInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutMovieInfoInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpsertWithoutMovieInfoInput, {
    nullable: true
  })
  upsert?: MovieUpsertWithoutMovieInfoInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateToOneWithWhereWithoutMovieInfoInput, {
    nullable: true
  })
  update?: MovieUpdateToOneWithWhereWithoutMovieInfoInput | undefined;
}
