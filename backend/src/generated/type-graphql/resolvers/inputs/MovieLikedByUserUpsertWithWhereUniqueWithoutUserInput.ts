import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserCreateWithoutUserInput } from "../inputs/MovieLikedByUserCreateWithoutUserInput";
import { MovieLikedByUserUpdateWithoutUserInput } from "../inputs/MovieLikedByUserUpdateWithoutUserInput";
import { MovieLikedByUserWhereUniqueInput } from "../inputs/MovieLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput", {})
export class MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieLikedByUserUpdateWithoutUserInput, {
    nullable: false
  })
  update!: MovieLikedByUserUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => MovieLikedByUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: MovieLikedByUserCreateWithoutUserInput;
}
