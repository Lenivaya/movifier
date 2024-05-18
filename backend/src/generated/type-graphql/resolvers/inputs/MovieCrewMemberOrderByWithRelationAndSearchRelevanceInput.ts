import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOrderByRelevanceInput } from "../inputs/MovieCrewMemberOrderByRelevanceInput";
import { MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput";
import { MovieOrderByRelationAggregateInput } from "../inputs/MovieOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType(
  "MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput",
  {},
)
export class MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  movieCrewMemberTypeId?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => MovieOrderByRelationAggregateInput, {
    nullable: true,
  })
  movies?: MovieOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput,
    {
      nullable: true,
    },
  )
  movieCrewMemberType?:
    | MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput
    | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: MovieCrewMemberOrderByRelevanceInput | undefined;
}
