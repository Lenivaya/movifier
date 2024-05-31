import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserMovieWatchlistCreateWithoutUserInput } from "../inputs/UserMovieWatchlistCreateWithoutUserInput";
import { UserMovieWatchlistWhereUniqueInput } from "../inputs/UserMovieWatchlistWhereUniqueInput";

@TypeGraphQL.InputType("UserMovieWatchlistCreateOrConnectWithoutUserInput", {})
export class UserMovieWatchlistCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: UserMovieWatchlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserMovieWatchlistCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserMovieWatchlistCreateWithoutUserInput;
}
