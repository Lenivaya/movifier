import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateWithoutGenresInput } from "../inputs/MovieUpdateWithoutGenresInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateWithWhereUniqueWithoutGenresInput", {})
export class MovieUpdateWithWhereUniqueWithoutGenresInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutGenresInput, {
    nullable: false
  })
  data!: MovieUpdateWithoutGenresInput;
}
