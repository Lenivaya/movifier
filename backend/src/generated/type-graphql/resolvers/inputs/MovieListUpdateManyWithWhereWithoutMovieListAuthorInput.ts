import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListScalarWhereInput } from "../inputs/MovieListScalarWhereInput";
import { MovieListUpdateManyMutationInput } from "../inputs/MovieListUpdateManyMutationInput";

@TypeGraphQL.InputType("MovieListUpdateManyWithWhereWithoutMovieListAuthorInput", {})
export class MovieListUpdateManyWithWhereWithoutMovieListAuthorInput {
  @TypeGraphQL.Field(_type => MovieListScalarWhereInput, {
    nullable: false
  })
  where!: MovieListScalarWhereInput;

  @TypeGraphQL.Field(_type => MovieListUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieListUpdateManyMutationInput;
}
