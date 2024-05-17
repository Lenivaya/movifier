import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutMovieInfoInput } from "../inputs/MovieCreateWithoutMovieInfoInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateOrConnectWithoutMovieInfoInput", {})
export class MovieCreateOrConnectWithoutMovieInfoInput {
  @TypeGraphQL.Field((_type) => MovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieCreateWithoutMovieInfoInput, {
    nullable: false,
  })
  create!: MovieCreateWithoutMovieInfoInput;
}
