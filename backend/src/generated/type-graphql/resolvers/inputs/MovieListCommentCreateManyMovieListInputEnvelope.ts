import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentCreateManyMovieListInput } from "../inputs/MovieListCommentCreateManyMovieListInput";

@TypeGraphQL.InputType("MovieListCommentCreateManyMovieListInputEnvelope", {})
export class MovieListCommentCreateManyMovieListInputEnvelope {
  @TypeGraphQL.Field((_type) => [MovieListCommentCreateManyMovieListInput], {
    nullable: false,
  })
  data!: MovieListCommentCreateManyMovieListInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
