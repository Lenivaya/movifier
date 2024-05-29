import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserMovieWatchlistCreateManyUserInputEnvelope } from "../inputs/UserMovieWatchlistCreateManyUserInputEnvelope";
import { UserMovieWatchlistCreateOrConnectWithoutUserInput } from "../inputs/UserMovieWatchlistCreateOrConnectWithoutUserInput";
import { UserMovieWatchlistCreateWithoutUserInput } from "../inputs/UserMovieWatchlistCreateWithoutUserInput";
import { UserMovieWatchlistWhereUniqueInput } from "../inputs/UserMovieWatchlistWhereUniqueInput";

@TypeGraphQL.InputType("UserMovieWatchlistCreateNestedManyWithoutUserInput", {})
export class UserMovieWatchlistCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UserMovieWatchlistCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserMovieWatchlistCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserMovieWatchlistCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserMovieWatchlistCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserMovieWatchlistCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistWhereUniqueInput], {
    nullable: true
  })
  connect?: UserMovieWatchlistWhereUniqueInput[] | undefined;
}
