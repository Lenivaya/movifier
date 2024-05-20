import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieKeywordCategoryScalarWhereInput } from "../inputs/MovieKeywordCategoryScalarWhereInput";
import { MovieKeywordCategoryUpdateManyMutationInput } from "../inputs/MovieKeywordCategoryUpdateManyMutationInput";

@TypeGraphQL.InputType("MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput", {})
export class MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput {
  @TypeGraphQL.Field(_type => MovieKeywordCategoryScalarWhereInput, {
    nullable: false
  })
  where!: MovieKeywordCategoryScalarWhereInput;

  @TypeGraphQL.Field(_type => MovieKeywordCategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieKeywordCategoryUpdateManyMutationInput;
}
