import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieKeywordCategoryUpdateWithoutMoviesInput } from "../inputs/MovieKeywordCategoryUpdateWithoutMoviesInput";
import { MovieKeywordCategoryWhereUniqueInput } from "../inputs/MovieKeywordCategoryWhereUniqueInput";

@TypeGraphQL.InputType("MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput", {})
export class MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field(_type => MovieKeywordCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: MovieKeywordCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieKeywordCategoryUpdateWithoutMoviesInput, {
    nullable: false
  })
  data!: MovieKeywordCategoryUpdateWithoutMoviesInput;
}
