import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserMovieWatchlistCreateManyMovieInputEnvelope } from "../inputs/UserMovieWatchlistCreateManyMovieInputEnvelope";
import { UserMovieWatchlistCreateOrConnectWithoutMovieInput } from "../inputs/UserMovieWatchlistCreateOrConnectWithoutMovieInput";
import { UserMovieWatchlistCreateWithoutMovieInput } from "../inputs/UserMovieWatchlistCreateWithoutMovieInput";
import { UserMovieWatchlistWhereUniqueInput } from "../inputs/UserMovieWatchlistWhereUniqueInput";

@TypeGraphQL.InputType("UserMovieWatchlistCreateNestedManyWithoutMovieInput", {})
export class UserMovieWatchlistCreateNestedManyWithoutMovieInput {
  @TypeGraphQL.Field(_type => [UserMovieWatchlistCreateWithoutMovieInput], {
    nullable: true
  })
  create?: UserMovieWatchlistCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: UserMovieWatchlistCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => UserMovieWatchlistCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: UserMovieWatchlistCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistWhereUniqueInput], {
    nullable: true
  })
  connect?: UserMovieWatchlistWhereUniqueInput[] | undefined;
}
