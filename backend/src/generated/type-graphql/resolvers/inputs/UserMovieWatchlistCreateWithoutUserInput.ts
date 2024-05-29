import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutInWatchlistByUsersInput } from "../inputs/MovieCreateNestedOneWithoutInWatchlistByUsersInput";

@TypeGraphQL.InputType("UserMovieWatchlistCreateWithoutUserInput", {})
export class UserMovieWatchlistCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovieCreateNestedOneWithoutInWatchlistByUsersInput, {
    nullable: false
  })
  movie!: MovieCreateNestedOneWithoutInWatchlistByUsersInput;
}
