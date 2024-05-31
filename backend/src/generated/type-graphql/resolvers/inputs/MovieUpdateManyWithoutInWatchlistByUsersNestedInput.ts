import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutInWatchlistByUsersInput } from "../inputs/MovieCreateOrConnectWithoutInWatchlistByUsersInput";
import { MovieCreateWithoutInWatchlistByUsersInput } from "../inputs/MovieCreateWithoutInWatchlistByUsersInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutInWatchlistByUsersInput } from "../inputs/MovieUpdateManyWithWhereWithoutInWatchlistByUsersInput";
import { MovieUpdateWithWhereUniqueWithoutInWatchlistByUsersInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutInWatchlistByUsersInput";
import { MovieUpsertWithWhereUniqueWithoutInWatchlistByUsersInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutInWatchlistByUsersInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateManyWithoutInWatchlistByUsersNestedInput", {})
export class MovieUpdateManyWithoutInWatchlistByUsersNestedInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutInWatchlistByUsersInput], {
    nullable: true
  })
  create?: MovieCreateWithoutInWatchlistByUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutInWatchlistByUsersInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutInWatchlistByUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpsertWithWhereUniqueWithoutInWatchlistByUsersInput], {
    nullable: true
  })
  upsert?: MovieUpsertWithWhereUniqueWithoutInWatchlistByUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  set?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateWithWhereUniqueWithoutInWatchlistByUsersInput], {
    nullable: true
  })
  update?: MovieUpdateWithWhereUniqueWithoutInWatchlistByUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateManyWithWhereWithoutInWatchlistByUsersInput], {
    nullable: true
  })
  updateMany?: MovieUpdateManyWithWhereWithoutInWatchlistByUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;
}
