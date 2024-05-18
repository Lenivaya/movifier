import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieCrewMemberScalarWhereWithAggregatesInput", {})
export class MovieCrewMemberScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  AND?: MovieCrewMemberScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  OR?: MovieCrewMemberScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  NOT?: MovieCrewMemberScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  movieCrewMemberTypeId?: StringNullableWithAggregatesFilter | undefined;
}