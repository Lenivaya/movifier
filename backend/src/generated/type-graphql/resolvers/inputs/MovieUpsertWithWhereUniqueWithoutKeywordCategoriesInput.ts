import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutKeywordCategoriesInput } from "../inputs/MovieCreateWithoutKeywordCategoriesInput";
import { MovieUpdateWithoutKeywordCategoriesInput } from "../inputs/MovieUpdateWithoutKeywordCategoriesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieUpsertWithWhereUniqueWithoutKeywordCategoriesInput",
  {},
)
export class MovieUpsertWithWhereUniqueWithoutKeywordCategoriesInput {
  @TypeGraphQL.Field((_type) => MovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieUpdateWithoutKeywordCategoriesInput, {
    nullable: false,
  })
  update!: MovieUpdateWithoutKeywordCategoriesInput;

  @TypeGraphQL.Field((_type) => MovieCreateWithoutKeywordCategoriesInput, {
    nullable: false,
  })
  create!: MovieCreateWithoutKeywordCategoriesInput;
}
