import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserMovieWatchlistCreateManyUserInputEnvelope } from "../inputs/UserMovieWatchlistCreateManyUserInputEnvelope";
import { UserMovieWatchlistCreateOrConnectWithoutUserInput } from "../inputs/UserMovieWatchlistCreateOrConnectWithoutUserInput";
import { UserMovieWatchlistCreateWithoutUserInput } from "../inputs/UserMovieWatchlistCreateWithoutUserInput";
import { UserMovieWatchlistScalarWhereInput } from "../inputs/UserMovieWatchlistScalarWhereInput";
import { UserMovieWatchlistUpdateManyWithWhereWithoutUserInput } from "../inputs/UserMovieWatchlistUpdateManyWithWhereWithoutUserInput";
import { UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput";
import { UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput";
import { UserMovieWatchlistWhereUniqueInput } from "../inputs/UserMovieWatchlistWhereUniqueInput";

@TypeGraphQL.InputType("UserMovieWatchlistUpdateManyWithoutUserNestedInput", {})
export class UserMovieWatchlistUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [UserMovieWatchlistCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserMovieWatchlistCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserMovieWatchlistCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserMovieWatchlistCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserMovieWatchlistCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistWhereUniqueInput], {
    nullable: true
  })
  set?: UserMovieWatchlistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserMovieWatchlistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistWhereUniqueInput], {
    nullable: true
  })
  delete?: UserMovieWatchlistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistWhereUniqueInput], {
    nullable: true
  })
  connect?: UserMovieWatchlistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UserMovieWatchlistUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserMovieWatchlistScalarWhereInput[] | undefined;
}
