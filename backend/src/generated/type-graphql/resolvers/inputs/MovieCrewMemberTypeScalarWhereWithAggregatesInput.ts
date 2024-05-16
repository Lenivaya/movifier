import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieCrewMemberTypeScalarWhereWithAggregatesInput", {})
export class MovieCrewMemberTypeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberTypeScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  AND?: MovieCrewMemberTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberTypeScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  OR?: MovieCrewMemberTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberTypeScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  NOT?: MovieCrewMemberTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringWithAggregatesFilter | undefined;
}
