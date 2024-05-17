import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutMovieListsInput } from "../inputs/MovieCreateWithoutMovieListsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateOrConnectWithoutMovieListsInput", {})
export class MovieCreateOrConnectWithoutMovieListsInput {
  @TypeGraphQL.Field((_type) => MovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieCreateWithoutMovieListsInput, {
    nullable: false,
  })
  create!: MovieCreateWithoutMovieListsInput;
}
