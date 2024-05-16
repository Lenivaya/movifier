import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutKeywordCategoriesInput } from "../inputs/MovieCreateNestedManyWithoutKeywordCategoriesInput";

@TypeGraphQL.InputType("MovieKeywordCategoryCreateInput", {})
export class MovieKeywordCategoryCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(
    (_type) => MovieCreateNestedManyWithoutKeywordCategoriesInput,
    {
      nullable: true,
    },
  )
  movies?: MovieCreateNestedManyWithoutKeywordCategoriesInput | undefined;
}
