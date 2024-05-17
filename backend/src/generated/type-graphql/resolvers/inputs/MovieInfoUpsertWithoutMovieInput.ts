import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieInfoCreateWithoutMovieInput } from "../inputs/MovieInfoCreateWithoutMovieInput";
import { MovieInfoUpdateWithoutMovieInput } from "../inputs/MovieInfoUpdateWithoutMovieInput";
import { MovieInfoWhereInput } from "../inputs/MovieInfoWhereInput";

@TypeGraphQL.InputType("MovieInfoUpsertWithoutMovieInput", {})
export class MovieInfoUpsertWithoutMovieInput {
  @TypeGraphQL.Field((_type) => MovieInfoUpdateWithoutMovieInput, {
    nullable: false,
  })
  update!: MovieInfoUpdateWithoutMovieInput;

  @TypeGraphQL.Field((_type) => MovieInfoCreateWithoutMovieInput, {
    nullable: false,
  })
  create!: MovieInfoCreateWithoutMovieInput;

  @TypeGraphQL.Field((_type) => MovieInfoWhereInput, {
    nullable: true,
  })
  where?: MovieInfoWhereInput | undefined;
}
