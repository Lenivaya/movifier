import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserMovieWatchlistUpdateWithoutMovieInput } from "../inputs/UserMovieWatchlistUpdateWithoutMovieInput";
import { UserMovieWatchlistWhereUniqueInput } from "../inputs/UserMovieWatchlistWhereUniqueInput";

@TypeGraphQL.InputType("UserMovieWatchlistUpdateWithWhereUniqueWithoutMovieInput", {})
export class UserMovieWatchlistUpdateWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: UserMovieWatchlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserMovieWatchlistUpdateWithoutMovieInput, {
    nullable: false
  })
  data!: UserMovieWatchlistUpdateWithoutMovieInput;
}
