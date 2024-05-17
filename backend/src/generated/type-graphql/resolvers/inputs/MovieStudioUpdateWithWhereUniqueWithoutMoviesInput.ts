import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStudioUpdateWithoutMoviesInput } from "../inputs/MovieStudioUpdateWithoutMoviesInput";
import { MovieStudioWhereUniqueInput } from "../inputs/MovieStudioWhereUniqueInput";

@TypeGraphQL.InputType("MovieStudioUpdateWithWhereUniqueWithoutMoviesInput", {})
export class MovieStudioUpdateWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => MovieStudioWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieStudioWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieStudioUpdateWithoutMoviesInput, {
    nullable: false,
  })
  data!: MovieStudioUpdateWithoutMoviesInput;
}
