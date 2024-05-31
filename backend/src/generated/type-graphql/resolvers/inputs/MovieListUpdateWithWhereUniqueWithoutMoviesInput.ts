import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListUpdateWithoutMoviesInput } from "../inputs/MovieListUpdateWithoutMoviesInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListUpdateWithWhereUniqueWithoutMoviesInput", {})
export class MovieListUpdateWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field(_type => MovieListWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieListUpdateWithoutMoviesInput, {
    nullable: false
  })
  data!: MovieListUpdateWithoutMoviesInput;
}
