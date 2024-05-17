import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieInfoUpdateWithoutMovieInput } from "../inputs/MovieInfoUpdateWithoutMovieInput";
import { MovieInfoWhereInput } from "../inputs/MovieInfoWhereInput";

@TypeGraphQL.InputType("MovieInfoUpdateToOneWithWhereWithoutMovieInput", {})
export class MovieInfoUpdateToOneWithWhereWithoutMovieInput {
  @TypeGraphQL.Field((_type) => MovieInfoWhereInput, {
    nullable: true,
  })
  where?: MovieInfoWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieInfoUpdateWithoutMovieInput, {
    nullable: false,
  })
  data!: MovieInfoUpdateWithoutMovieInput;
}
