import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListUpdateWithoutLikedByInput } from "../inputs/MovieListUpdateWithoutLikedByInput";
import { MovieListWhereInput } from "../inputs/MovieListWhereInput";

@TypeGraphQL.InputType("MovieListUpdateToOneWithWhereWithoutLikedByInput", {})
export class MovieListUpdateToOneWithWhereWithoutLikedByInput {
  @TypeGraphQL.Field(_type => MovieListWhereInput, {
    nullable: true
  })
  where?: MovieListWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieListUpdateWithoutLikedByInput, {
    nullable: false
  })
  data!: MovieListUpdateWithoutLikedByInput;
}
