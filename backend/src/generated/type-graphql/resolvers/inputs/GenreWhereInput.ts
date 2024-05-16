import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GenreWhereInput", {})
export class GenreWhereInput {
  @TypeGraphQL.Field((_type) => [GenreWhereInput], {
    nullable: true,
  })
  AND?: GenreWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GenreWhereInput], {
    nullable: true,
  })
  OR?: GenreWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GenreWhereInput], {
    nullable: true,
  })
  NOT?: GenreWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieListRelationFilter, {
    nullable: true,
  })
  movies?: MovieListRelationFilter | undefined;
}
