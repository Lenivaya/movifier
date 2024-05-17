import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutMovieInfoInput } from "../inputs/MovieCreateOrConnectWithoutMovieInfoInput";
import { MovieCreateWithoutMovieInfoInput } from "../inputs/MovieCreateWithoutMovieInfoInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateNestedOneWithoutMovieInfoInput", {})
export class MovieCreateNestedOneWithoutMovieInfoInput {
  @TypeGraphQL.Field((_type) => MovieCreateWithoutMovieInfoInput, {
    nullable: true,
  })
  create?: MovieCreateWithoutMovieInfoInput | undefined;

  @TypeGraphQL.Field((_type) => MovieCreateOrConnectWithoutMovieInfoInput, {
    nullable: true,
  })
  connectOrCreate?: MovieCreateOrConnectWithoutMovieInfoInput | undefined;

  @TypeGraphQL.Field((_type) => MovieWhereUniqueInput, {
    nullable: true,
  })
  connect?: MovieWhereUniqueInput | undefined;
}
