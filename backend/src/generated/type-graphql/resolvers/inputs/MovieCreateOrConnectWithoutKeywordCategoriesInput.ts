import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutKeywordCategoriesInput } from "../inputs/MovieCreateWithoutKeywordCategoriesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateOrConnectWithoutKeywordCategoriesInput", {})
export class MovieCreateOrConnectWithoutKeywordCategoriesInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutKeywordCategoriesInput, {
    nullable: false
  })
  create!: MovieCreateWithoutKeywordCategoriesInput;
}
