import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateManyMovieListAuthorInput } from "../inputs/MovieListCreateManyMovieListAuthorInput";

@TypeGraphQL.InputType("MovieListCreateManyMovieListAuthorInputEnvelope", {})
export class MovieListCreateManyMovieListAuthorInputEnvelope {
  @TypeGraphQL.Field((_type) => [MovieListCreateManyMovieListAuthorInput], {
    nullable: false,
  })
  data!: MovieListCreateManyMovieListAuthorInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
