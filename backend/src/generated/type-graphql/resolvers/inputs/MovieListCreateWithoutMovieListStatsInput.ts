import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutMovieListsInput } from "../inputs/MovieCreateNestedManyWithoutMovieListsInput";
import { MovieListCommentCreateNestedManyWithoutMovieListInput } from "../inputs/MovieListCommentCreateNestedManyWithoutMovieListInput";
import { MovifierAppUserCreateNestedOneWithoutMovieListsInput } from "../inputs/MovifierAppUserCreateNestedOneWithoutMovieListsInput";

@TypeGraphQL.InputType("MovieListCreateWithoutMovieListStatsInput", {})
export class MovieListCreateWithoutMovieListStatsInput {
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
  name!: string;

  @TypeGraphQL.Field((_type) => MovieCreateNestedManyWithoutMovieListsInput, {
    nullable: true,
  })
  movies?: MovieCreateNestedManyWithoutMovieListsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovifierAppUserCreateNestedOneWithoutMovieListsInput,
    {
      nullable: false,
    },
  )
  movieListAuthor!: MovifierAppUserCreateNestedOneWithoutMovieListsInput;

  @TypeGraphQL.Field(
    (_type) => MovieListCommentCreateNestedManyWithoutMovieListInput,
    {
      nullable: true,
    },
  )
  movieListComments?:
    | MovieListCommentCreateNestedManyWithoutMovieListInput
    | undefined;
}
