import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutMovieListsInput } from "../inputs/MovieCreateNestedManyWithoutMovieListsInput";
import { MovieListCommentCreateNestedManyWithoutMovieListInput } from "../inputs/MovieListCommentCreateNestedManyWithoutMovieListInput";
import { MovieListCreatetagsInput } from "../inputs/MovieListCreatetagsInput";
import { MovieListLikedByUserCreateNestedManyWithoutMovieListInput } from "../inputs/MovieListLikedByUserCreateNestedManyWithoutMovieListInput";
import { MovieListStatsCreateNestedOneWithoutMovieListInput } from "../inputs/MovieListStatsCreateNestedOneWithoutMovieListInput";
import { MovifierAppUserCreateNestedOneWithoutMovieListsInput } from "../inputs/MovifierAppUserCreateNestedOneWithoutMovieListsInput";

@TypeGraphQL.InputType("MovieListCreateInput", {})
export class MovieListCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => MovieListCreatetagsInput, {
    nullable: true
  })
  tags?: MovieListCreatetagsInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutMovieListsInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutMovieListsInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateNestedOneWithoutMovieListsInput, {
    nullable: false
  })
  movieListAuthor!: MovifierAppUserCreateNestedOneWithoutMovieListsInput;

  @TypeGraphQL.Field(_type => MovieListStatsCreateNestedOneWithoutMovieListInput, {
    nullable: true
  })
  stats?: MovieListStatsCreateNestedOneWithoutMovieListInput | undefined;

  @TypeGraphQL.Field(_type => MovieListCommentCreateNestedManyWithoutMovieListInput, {
    nullable: true
  })
  comments?: MovieListCommentCreateNestedManyWithoutMovieListInput | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserCreateNestedManyWithoutMovieListInput, {
    nullable: true
  })
  likedBy?: MovieListLikedByUserCreateNestedManyWithoutMovieListInput | undefined;
}
