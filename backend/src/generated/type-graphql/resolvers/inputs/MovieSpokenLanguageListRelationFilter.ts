import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieSpokenLanguageWhereInput } from "../inputs/MovieSpokenLanguageWhereInput";

@TypeGraphQL.InputType("MovieSpokenLanguageListRelationFilter", {})
export class MovieSpokenLanguageListRelationFilter {
  @TypeGraphQL.Field((_type) => MovieSpokenLanguageWhereInput, {
    nullable: true,
  })
  every?: MovieSpokenLanguageWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieSpokenLanguageWhereInput, {
    nullable: true,
  })
  some?: MovieSpokenLanguageWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieSpokenLanguageWhereInput, {
    nullable: true,
  })
  none?: MovieSpokenLanguageWhereInput | undefined;
}
