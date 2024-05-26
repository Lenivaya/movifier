import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserCreateWithoutUserInput } from "../inputs/MovieListLikedByUserCreateWithoutUserInput";
import { MovieListLikedByUserUpdateWithoutUserInput } from "../inputs/MovieListLikedByUserUpdateWithoutUserInput";
import { MovieListLikedByUserWhereUniqueInput } from "../inputs/MovieListLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput", {})
export class MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieListLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieListLikedByUserUpdateWithoutUserInput, {
    nullable: false
  })
  update!: MovieListLikedByUserUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => MovieListLikedByUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: MovieListLikedByUserCreateWithoutUserInput;
}
