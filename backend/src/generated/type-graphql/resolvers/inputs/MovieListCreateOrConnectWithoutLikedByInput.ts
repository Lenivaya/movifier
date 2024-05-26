import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateWithoutLikedByInput } from "../inputs/MovieListCreateWithoutLikedByInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListCreateOrConnectWithoutLikedByInput", {})
export class MovieListCreateOrConnectWithoutLikedByInput {
  @TypeGraphQL.Field(_type => MovieListWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieListCreateWithoutLikedByInput, {
    nullable: false
  })
  create!: MovieListCreateWithoutLikedByInput;
}
