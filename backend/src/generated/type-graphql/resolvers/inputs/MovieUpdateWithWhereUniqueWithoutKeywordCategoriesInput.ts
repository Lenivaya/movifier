import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateWithoutKeywordCategoriesInput } from "../inputs/MovieUpdateWithoutKeywordCategoriesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateWithWhereUniqueWithoutKeywordCategoriesInput", {})
export class MovieUpdateWithWhereUniqueWithoutKeywordCategoriesInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutKeywordCategoriesInput, {
    nullable: false
  })
  data!: MovieUpdateWithoutKeywordCategoriesInput;
}
