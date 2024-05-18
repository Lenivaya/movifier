import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieOrderByRelationAggregateInput } from "../inputs/MovieOrderByRelationAggregateInput";
import { MovieSpokenLanguageOrderByRelevanceInput } from "../inputs/MovieSpokenLanguageOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType(
  "MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput",
  {},
)
export class MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  language?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MovieOrderByRelationAggregateInput, {
    nullable: true,
  })
  movies?: MovieOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieSpokenLanguageOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: MovieSpokenLanguageOrderByRelevanceInput | undefined;
}
