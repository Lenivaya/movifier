import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovieListOrderByWithRelationAndSearchRelevanceInput";
import { MovieListStatsOrderByRelevanceInput } from "../inputs/MovieListStatsOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType(
  "MovieListStatsOrderByWithRelationAndSearchRelevanceInput",
  {},
)
export class MovieListStatsOrderByWithRelationAndSearchRelevanceInput {
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
  views?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  likes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  movieListId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieListOrderByWithRelationAndSearchRelevanceInput,
    {
      nullable: true,
    },
  )
  MovieList?: MovieListOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListStatsOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: MovieListStatsOrderByRelevanceInput | undefined;
}
