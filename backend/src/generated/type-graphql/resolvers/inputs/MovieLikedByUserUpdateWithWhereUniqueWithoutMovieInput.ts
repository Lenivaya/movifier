import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserUpdateWithoutMovieInput } from "../inputs/MovieLikedByUserUpdateWithoutMovieInput";
import { MovieLikedByUserWhereUniqueInput } from "../inputs/MovieLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput", {})
export class MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieLikedByUserUpdateWithoutMovieInput, {
    nullable: false
  })
  data!: MovieLikedByUserUpdateWithoutMovieInput;
}
