import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserUpdateWithoutUserInput } from "../inputs/MovieListLikedByUserUpdateWithoutUserInput";
import { MovieListLikedByUserWhereUniqueInput } from "../inputs/MovieListLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput", {})
export class MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieListLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieListLikedByUserUpdateWithoutUserInput, {
    nullable: false
  })
  data!: MovieListLikedByUserUpdateWithoutUserInput;
}
