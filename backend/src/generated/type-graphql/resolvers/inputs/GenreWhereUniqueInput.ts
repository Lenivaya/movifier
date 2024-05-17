import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GenreWhereInput } from "../inputs/GenreWhereInput";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";

@TypeGraphQL.InputType("GenreWhereUniqueInput", {})
export class GenreWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

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
