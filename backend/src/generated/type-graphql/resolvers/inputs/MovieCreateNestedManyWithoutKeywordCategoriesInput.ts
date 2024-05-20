import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutKeywordCategoriesInput } from "../inputs/MovieCreateOrConnectWithoutKeywordCategoriesInput";
import { MovieCreateWithoutKeywordCategoriesInput } from "../inputs/MovieCreateWithoutKeywordCategoriesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateNestedManyWithoutKeywordCategoriesInput", {})
export class MovieCreateNestedManyWithoutKeywordCategoriesInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutKeywordCategoriesInput], {
    nullable: true
  })
  create?: MovieCreateWithoutKeywordCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutKeywordCategoriesInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutKeywordCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWhereUniqueInput[] | undefined;
}
