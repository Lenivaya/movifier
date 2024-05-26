import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateNestedOneWithoutLikedByInput } from "../inputs/MovieListCreateNestedOneWithoutLikedByInput";

@TypeGraphQL.InputType("MovieListLikedByUserCreateWithoutUserInput", {})
export class MovieListLikedByUserCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovieListCreateNestedOneWithoutLikedByInput, {
    nullable: false
  })
  movieList!: MovieListCreateNestedOneWithoutLikedByInput;
}
