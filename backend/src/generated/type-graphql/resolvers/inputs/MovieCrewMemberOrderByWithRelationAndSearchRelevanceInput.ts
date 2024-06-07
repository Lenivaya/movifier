import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieOrderByRelationAggregateInput } from "../inputs/MovieCrewMemberOnMovieOrderByRelationAggregateInput";
import { MovieCrewMemberOrderByRelevanceInput } from "../inputs/MovieCrewMemberOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput", {})
export class MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  photoUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  popularity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  imdbId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieOrderByRelationAggregateInput, {
    nullable: true
  })
  movies?: MovieCrewMemberOnMovieOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: MovieCrewMemberOrderByRelevanceInput | undefined;
}
