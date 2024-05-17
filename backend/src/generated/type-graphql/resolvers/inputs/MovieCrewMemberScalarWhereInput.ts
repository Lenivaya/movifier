import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("MovieCrewMemberScalarWhereInput", {})
export class MovieCrewMemberScalarWhereInput {
  @TypeGraphQL.Field((_type) => [MovieCrewMemberScalarWhereInput], {
    nullable: true,
  })
  AND?: MovieCrewMemberScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberScalarWhereInput], {
    nullable: true,
  })
  OR?: MovieCrewMemberScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberScalarWhereInput], {
    nullable: true,
  })
  NOT?: MovieCrewMemberScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  movieCrewMemberTypeId?: StringNullableFilter | undefined;
}
