import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieKeywordCategoryCreateOrConnectWithoutMoviesInput } from "../inputs/MovieKeywordCategoryCreateOrConnectWithoutMoviesInput";
import { MovieKeywordCategoryCreateWithoutMoviesInput } from "../inputs/MovieKeywordCategoryCreateWithoutMoviesInput";
import { MovieKeywordCategoryWhereUniqueInput } from "../inputs/MovieKeywordCategoryWhereUniqueInput";

@TypeGraphQL.InputType("MovieKeywordCategoryCreateNestedManyWithoutMoviesInput", {})
export class MovieKeywordCategoryCreateNestedManyWithoutMoviesInput {
  @TypeGraphQL.Field(_type => [MovieKeywordCategoryCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: MovieKeywordCategoryCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieKeywordCategoryCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: MovieKeywordCategoryCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieKeywordCategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieKeywordCategoryWhereUniqueInput[] | undefined;
}
