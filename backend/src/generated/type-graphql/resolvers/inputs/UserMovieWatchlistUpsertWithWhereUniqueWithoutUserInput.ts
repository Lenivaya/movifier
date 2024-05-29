import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserMovieWatchlistCreateWithoutUserInput } from "../inputs/UserMovieWatchlistCreateWithoutUserInput";
import { UserMovieWatchlistUpdateWithoutUserInput } from "../inputs/UserMovieWatchlistUpdateWithoutUserInput";
import { UserMovieWatchlistWhereUniqueInput } from "../inputs/UserMovieWatchlistWhereUniqueInput";

@TypeGraphQL.InputType("UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput", {})
export class UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: UserMovieWatchlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserMovieWatchlistUpdateWithoutUserInput, {
    nullable: false
  })
  update!: UserMovieWatchlistUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => UserMovieWatchlistCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserMovieWatchlistCreateWithoutUserInput;
}
