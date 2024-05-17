import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateWithoutInWatchlistByUsersInput } from "../inputs/MovieUpdateWithoutInWatchlistByUsersInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieUpdateWithWhereUniqueWithoutInWatchlistByUsersInput",
  {},
)
export class MovieUpdateWithWhereUniqueWithoutInWatchlistByUsersInput {
  @TypeGraphQL.Field((_type) => MovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieUpdateWithoutInWatchlistByUsersInput, {
    nullable: false,
  })
  data!: MovieUpdateWithoutInWatchlistByUsersInput;
}
