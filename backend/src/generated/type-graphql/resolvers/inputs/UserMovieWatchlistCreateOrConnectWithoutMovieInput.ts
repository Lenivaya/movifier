import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserMovieWatchlistCreateWithoutMovieInput } from "../inputs/UserMovieWatchlistCreateWithoutMovieInput";
import { UserMovieWatchlistWhereUniqueInput } from "../inputs/UserMovieWatchlistWhereUniqueInput";

@TypeGraphQL.InputType("UserMovieWatchlistCreateOrConnectWithoutMovieInput", {})
export class UserMovieWatchlistCreateOrConnectWithoutMovieInput {
  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: UserMovieWatchlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserMovieWatchlistCreateWithoutMovieInput, {
    nullable: false
  })
  create!: UserMovieWatchlistCreateWithoutMovieInput;
}
