import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("MovieScalarWhereInput", {})
export class MovieScalarWhereInput {
  @TypeGraphQL.Field((_type) => [MovieScalarWhereInput], {
    nullable: true,
  })
  AND?: MovieScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieScalarWhereInput], {
    nullable: true,
  })
  OR?: MovieScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieScalarWhereInput], {
    nullable: true,
  })
  NOT?: MovieScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  genreName?: StringNullableFilter | undefined;
}
