import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStudioCreateWithoutMoviesInput } from "../inputs/MovieStudioCreateWithoutMoviesInput";
import { MovieStudioUpdateWithoutMoviesInput } from "../inputs/MovieStudioUpdateWithoutMoviesInput";
import { MovieStudioWhereUniqueInput } from "../inputs/MovieStudioWhereUniqueInput";

@TypeGraphQL.InputType("MovieStudioUpsertWithWhereUniqueWithoutMoviesInput", {})
export class MovieStudioUpsertWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field(_type => MovieStudioWhereUniqueInput, {
    nullable: false
  })
  where!: MovieStudioWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieStudioUpdateWithoutMoviesInput, {
    nullable: false
  })
  update!: MovieStudioUpdateWithoutMoviesInput;

  @TypeGraphQL.Field(_type => MovieStudioCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: MovieStudioCreateWithoutMoviesInput;
}
