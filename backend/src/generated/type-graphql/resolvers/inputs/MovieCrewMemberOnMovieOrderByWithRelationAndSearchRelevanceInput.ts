import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieOrderByRelevanceInput } from "../inputs/MovieCrewMemberOnMovieOrderByRelevanceInput";
import { MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput";
import { MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput";
import { MovieOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovieOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput", {})
export class MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput {
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
  order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movieId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movieCrewMemberId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movieCrewMemberTypeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  movie?: MovieOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  crewMember?: MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  movieCrewMemberType?: MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: MovieCrewMemberOnMovieOrderByRelevanceInput | undefined;
}
