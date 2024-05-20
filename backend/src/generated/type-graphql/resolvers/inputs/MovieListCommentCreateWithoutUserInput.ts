import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateNestedOneWithoutMovieListCommentsInput } from "../inputs/MovieListCreateNestedOneWithoutMovieListCommentsInput";

@TypeGraphQL.InputType("MovieListCommentCreateWithoutUserInput", {})
export class MovieListCommentCreateWithoutUserInput {
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
  content!: string;

  @TypeGraphQL.Field(_type => MovieListCreateNestedOneWithoutMovieListCommentsInput, {
    nullable: false
  })
  movieList!: MovieListCreateNestedOneWithoutMovieListCommentsInput;
}
