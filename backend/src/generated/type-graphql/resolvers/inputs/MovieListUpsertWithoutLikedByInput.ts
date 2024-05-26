import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateWithoutLikedByInput } from "../inputs/MovieListCreateWithoutLikedByInput";
import { MovieListUpdateWithoutLikedByInput } from "../inputs/MovieListUpdateWithoutLikedByInput";
import { MovieListWhereInput } from "../inputs/MovieListWhereInput";

@TypeGraphQL.InputType("MovieListUpsertWithoutLikedByInput", {})
export class MovieListUpsertWithoutLikedByInput {
  @TypeGraphQL.Field(_type => MovieListUpdateWithoutLikedByInput, {
    nullable: false
  })
  update!: MovieListUpdateWithoutLikedByInput;

  @TypeGraphQL.Field(_type => MovieListCreateWithoutLikedByInput, {
    nullable: false
  })
  create!: MovieListCreateWithoutLikedByInput;

  @TypeGraphQL.Field(_type => MovieListWhereInput, {
    nullable: true
  })
  where?: MovieListWhereInput | undefined;
}
