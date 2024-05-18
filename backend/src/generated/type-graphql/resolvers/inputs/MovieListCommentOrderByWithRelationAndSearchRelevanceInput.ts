import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentOrderByRelevanceInput } from "../inputs/MovieListCommentOrderByRelevanceInput";
import { MovieListOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovieListOrderByWithRelationAndSearchRelevanceInput";
import { MovifierAppUserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovifierAppUserOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType(
  "MovieListCommentOrderByWithRelationAndSearchRelevanceInput",
  {},
)
export class MovieListCommentOrderByWithRelationAndSearchRelevanceInput {
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
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  movieListId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieListOrderByWithRelationAndSearchRelevanceInput,
    {
      nullable: true,
    },
  )
  movieList?: MovieListOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovifierAppUserOrderByWithRelationAndSearchRelevanceInput,
    {
      nullable: true,
    },
  )
  user?: MovifierAppUserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListCommentOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: MovieListCommentOrderByRelevanceInput | undefined;
}
