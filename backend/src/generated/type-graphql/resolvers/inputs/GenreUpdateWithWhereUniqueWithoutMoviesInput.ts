import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreUpdateWithoutMoviesInput } from "../inputs/GenreUpdateWithoutMoviesInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType("GenreUpdateWithWhereUniqueWithoutMoviesInput", {})
export class GenreUpdateWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field(_type => GenreWhereUniqueInput, {
    nullable: false
  })
  where!: GenreWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenreUpdateWithoutMoviesInput, {
    nullable: false
  })
  data!: GenreUpdateWithoutMoviesInput;
}
