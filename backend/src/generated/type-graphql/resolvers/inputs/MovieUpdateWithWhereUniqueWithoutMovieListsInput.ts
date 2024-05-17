import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateWithoutMovieListsInput } from "../inputs/MovieUpdateWithoutMovieListsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateWithWhereUniqueWithoutMovieListsInput", {})
export class MovieUpdateWithWhereUniqueWithoutMovieListsInput {
  @TypeGraphQL.Field((_type) => MovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieUpdateWithoutMovieListsInput, {
    nullable: false,
  })
  data!: MovieUpdateWithoutMovieListsInput;
}
