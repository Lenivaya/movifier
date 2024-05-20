import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateWithoutMoviesInput } from "../inputs/GenreCreateWithoutMoviesInput";
import { GenreUpdateWithoutMoviesInput } from "../inputs/GenreUpdateWithoutMoviesInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType("GenreUpsertWithWhereUniqueWithoutMoviesInput", {})
export class GenreUpsertWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field(_type => GenreWhereUniqueInput, {
    nullable: false
  })
  where!: GenreWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenreUpdateWithoutMoviesInput, {
    nullable: false
  })
  update!: GenreUpdateWithoutMoviesInput;

  @TypeGraphQL.Field(_type => GenreCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: GenreCreateWithoutMoviesInput;
}
