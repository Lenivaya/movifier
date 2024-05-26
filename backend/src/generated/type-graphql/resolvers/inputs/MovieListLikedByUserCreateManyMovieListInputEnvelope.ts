import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserCreateManyMovieListInput } from "../inputs/MovieListLikedByUserCreateManyMovieListInput";

@TypeGraphQL.InputType("MovieListLikedByUserCreateManyMovieListInputEnvelope", {})
export class MovieListLikedByUserCreateManyMovieListInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieListLikedByUserCreateManyMovieListInput], {
    nullable: false
  })
  data!: MovieListLikedByUserCreateManyMovieListInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
