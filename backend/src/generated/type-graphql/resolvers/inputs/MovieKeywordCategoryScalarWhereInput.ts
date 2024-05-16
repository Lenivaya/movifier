import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieKeywordCategoryScalarWhereInput", {})
export class MovieKeywordCategoryScalarWhereInput {
  @TypeGraphQL.Field((_type) => [MovieKeywordCategoryScalarWhereInput], {
    nullable: true,
  })
  AND?: MovieKeywordCategoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieKeywordCategoryScalarWhereInput], {
    nullable: true,
  })
  OR?: MovieKeywordCategoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieKeywordCategoryScalarWhereInput], {
    nullable: true,
  })
  NOT?: MovieKeywordCategoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;
}
