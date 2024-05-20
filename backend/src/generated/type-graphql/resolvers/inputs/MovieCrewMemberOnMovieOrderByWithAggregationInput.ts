import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieCountOrderByAggregateInput } from "../inputs/MovieCrewMemberOnMovieCountOrderByAggregateInput";
import { MovieCrewMemberOnMovieMaxOrderByAggregateInput } from "../inputs/MovieCrewMemberOnMovieMaxOrderByAggregateInput";
import { MovieCrewMemberOnMovieMinOrderByAggregateInput } from "../inputs/MovieCrewMemberOnMovieMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieOrderByWithAggregationInput", {})
export class MovieCrewMemberOnMovieOrderByWithAggregationInput {
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
  movieId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movieCrewMemberId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movieCrewMemberTypeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieCrewMemberOnMovieCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieCrewMemberOnMovieMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieCrewMemberOnMovieMinOrderByAggregateInput | undefined;
}
