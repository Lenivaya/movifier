import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieKeywordCategoryCreateWithoutMoviesInput } from "../inputs/MovieKeywordCategoryCreateWithoutMoviesInput";
import { MovieKeywordCategoryWhereUniqueInput } from "../inputs/MovieKeywordCategoryWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieKeywordCategoryCreateOrConnectWithoutMoviesInput",
  {},
)
export class MovieKeywordCategoryCreateOrConnectWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => MovieKeywordCategoryWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieKeywordCategoryWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieKeywordCategoryCreateWithoutMoviesInput, {
    nullable: false,
  })
  create!: MovieKeywordCategoryCreateWithoutMoviesInput;
}
