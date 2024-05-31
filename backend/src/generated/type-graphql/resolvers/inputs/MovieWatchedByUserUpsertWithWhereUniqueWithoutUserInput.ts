import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserCreateWithoutUserInput } from "../inputs/MovieWatchedByUserCreateWithoutUserInput";
import { MovieWatchedByUserUpdateWithoutUserInput } from "../inputs/MovieWatchedByUserUpdateWithoutUserInput";
import { MovieWatchedByUserWhereUniqueInput } from "../inputs/MovieWatchedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput", {})
export class MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWatchedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieWatchedByUserUpdateWithoutUserInput, {
    nullable: false
  })
  update!: MovieWatchedByUserUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => MovieWatchedByUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: MovieWatchedByUserCreateWithoutUserInput;
}
