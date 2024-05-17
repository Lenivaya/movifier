import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutMovieInfoInput } from "../inputs/MovieCreateWithoutMovieInfoInput";
import { MovieUpdateWithoutMovieInfoInput } from "../inputs/MovieUpdateWithoutMovieInfoInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieUpsertWithoutMovieInfoInput", {})
export class MovieUpsertWithoutMovieInfoInput {
  @TypeGraphQL.Field((_type) => MovieUpdateWithoutMovieInfoInput, {
    nullable: false,
  })
  update!: MovieUpdateWithoutMovieInfoInput;

  @TypeGraphQL.Field((_type) => MovieCreateWithoutMovieInfoInput, {
    nullable: false,
  })
  create!: MovieCreateWithoutMovieInfoInput;

  @TypeGraphQL.Field((_type) => MovieWhereInput, {
    nullable: true,
  })
  where?: MovieWhereInput | undefined;
}
