import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserUpdateWithoutUserInput } from "../inputs/MovieWatchedByUserUpdateWithoutUserInput";
import { MovieWatchedByUserWhereUniqueInput } from "../inputs/MovieWatchedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput", {})
export class MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWatchedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieWatchedByUserUpdateWithoutUserInput, {
    nullable: false
  })
  data!: MovieWatchedByUserUpdateWithoutUserInput;
}
