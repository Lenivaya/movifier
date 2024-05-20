import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateWithoutMoviesInput } from "../inputs/MovieListCreateWithoutMoviesInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListCreateOrConnectWithoutMoviesInput", {})
export class MovieListCreateOrConnectWithoutMoviesInput {
  @TypeGraphQL.Field(_type => MovieListWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieListCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: MovieListCreateWithoutMoviesInput;
}
