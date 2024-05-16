import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateWithoutMovieInfoInput } from "../inputs/MovieUpdateWithoutMovieInfoInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieUpdateToOneWithWhereWithoutMovieInfoInput", {})
export class MovieUpdateToOneWithWhereWithoutMovieInfoInput {
  @TypeGraphQL.Field((_type) => MovieWhereInput, {
    nullable: true,
  })
  where?: MovieWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieUpdateWithoutMovieInfoInput, {
    nullable: false,
  })
  data!: MovieUpdateWithoutMovieInfoInput;
}
