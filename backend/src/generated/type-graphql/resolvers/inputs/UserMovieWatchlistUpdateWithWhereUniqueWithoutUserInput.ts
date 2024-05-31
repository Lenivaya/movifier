import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserMovieWatchlistUpdateWithoutUserInput } from "../inputs/UserMovieWatchlistUpdateWithoutUserInput";
import { UserMovieWatchlistWhereUniqueInput } from "../inputs/UserMovieWatchlistWhereUniqueInput";

@TypeGraphQL.InputType("UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput", {})
export class UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: UserMovieWatchlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserMovieWatchlistUpdateWithoutUserInput, {
    nullable: false
  })
  data!: UserMovieWatchlistUpdateWithoutUserInput;
}
