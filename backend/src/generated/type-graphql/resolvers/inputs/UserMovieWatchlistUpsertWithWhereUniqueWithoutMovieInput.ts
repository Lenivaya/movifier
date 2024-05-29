import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserMovieWatchlistCreateWithoutMovieInput } from "../inputs/UserMovieWatchlistCreateWithoutMovieInput";
import { UserMovieWatchlistUpdateWithoutMovieInput } from "../inputs/UserMovieWatchlistUpdateWithoutMovieInput";
import { UserMovieWatchlistWhereUniqueInput } from "../inputs/UserMovieWatchlistWhereUniqueInput";

@TypeGraphQL.InputType("UserMovieWatchlistUpsertWithWhereUniqueWithoutMovieInput", {})
export class UserMovieWatchlistUpsertWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: UserMovieWatchlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserMovieWatchlistUpdateWithoutMovieInput, {
    nullable: false
  })
  update!: UserMovieWatchlistUpdateWithoutMovieInput;

  @TypeGraphQL.Field(_type => UserMovieWatchlistCreateWithoutMovieInput, {
    nullable: false
  })
  create!: UserMovieWatchlistCreateWithoutMovieInput;
}
