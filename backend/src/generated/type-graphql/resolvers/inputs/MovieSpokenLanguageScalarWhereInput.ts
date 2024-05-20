import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieSpokenLanguageScalarWhereInput", {})
export class MovieSpokenLanguageScalarWhereInput {
  @TypeGraphQL.Field(_type => [MovieSpokenLanguageScalarWhereInput], {
    nullable: true
  })
  AND?: MovieSpokenLanguageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageScalarWhereInput], {
    nullable: true
  })
  OR?: MovieSpokenLanguageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageScalarWhereInput], {
    nullable: true
  })
  NOT?: MovieSpokenLanguageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  language?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
