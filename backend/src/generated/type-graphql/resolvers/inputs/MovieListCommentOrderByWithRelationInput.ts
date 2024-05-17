import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListOrderByWithRelationInput } from "../inputs/MovieListOrderByWithRelationInput";
import { MovifierAppUserOrderByWithRelationInput } from "../inputs/MovifierAppUserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieListCommentOrderByWithRelationInput", {})
export class MovieListCommentOrderByWithRelationInput {
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

  @TypeGraphQL.Field((_type) => MovieListOrderByWithRelationInput, {
    nullable: true,
  })
  movieList?: MovieListOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserOrderByWithRelationInput, {
    nullable: true,
  })
  user?: MovifierAppUserOrderByWithRelationInput | undefined;
}
