import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieSpokenLanguageWhereInput", {})
export class MovieSpokenLanguageWhereInput {
  @TypeGraphQL.Field(_type => [MovieSpokenLanguageWhereInput], {
    nullable: true
  })
  AND?: MovieSpokenLanguageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageWhereInput], {
    nullable: true
  })
  OR?: MovieSpokenLanguageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageWhereInput], {
    nullable: true
  })
  NOT?: MovieSpokenLanguageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  iso_639_1?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListRelationFilter, {
    nullable: true
  })
  movies?: MovieListRelationFilter | undefined;
}
