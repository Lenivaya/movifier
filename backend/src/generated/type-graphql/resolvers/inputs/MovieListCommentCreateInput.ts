import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateNestedOneWithoutMovieListCommentsInput } from "../inputs/MovieListCreateNestedOneWithoutMovieListCommentsInput";
import { MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput } from "../inputs/MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput";

@TypeGraphQL.InputType("MovieListCommentCreateInput", {})
export class MovieListCommentCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  content!: string;

  @TypeGraphQL.Field(
    (_type) => MovieListCreateNestedOneWithoutMovieListCommentsInput,
    {
      nullable: false,
    },
  )
  movieList!: MovieListCreateNestedOneWithoutMovieListCommentsInput;

  @TypeGraphQL.Field(
    (_type) => MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput,
    {
      nullable: false,
    },
  )
  user!: MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput;
}