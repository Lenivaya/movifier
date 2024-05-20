import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateWithoutSpokenLanguagesInput } from "../inputs/MovieUpdateWithoutSpokenLanguagesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateWithWhereUniqueWithoutSpokenLanguagesInput", {})
export class MovieUpdateWithWhereUniqueWithoutSpokenLanguagesInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutSpokenLanguagesInput, {
    nullable: false
  })
  data!: MovieUpdateWithoutSpokenLanguagesInput;
}
