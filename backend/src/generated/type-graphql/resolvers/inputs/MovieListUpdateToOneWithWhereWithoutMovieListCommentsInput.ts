import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListUpdateWithoutMovieListCommentsInput } from "../inputs/MovieListUpdateWithoutMovieListCommentsInput";
import { MovieListWhereInput } from "../inputs/MovieListWhereInput";

@TypeGraphQL.InputType("MovieListUpdateToOneWithWhereWithoutMovieListCommentsInput", {})
export class MovieListUpdateToOneWithWhereWithoutMovieListCommentsInput {
  @TypeGraphQL.Field(_type => MovieListWhereInput, {
    nullable: true
  })
  where?: MovieListWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieListUpdateWithoutMovieListCommentsInput, {
    nullable: false
  })
  data!: MovieListUpdateWithoutMovieListCommentsInput;
}
