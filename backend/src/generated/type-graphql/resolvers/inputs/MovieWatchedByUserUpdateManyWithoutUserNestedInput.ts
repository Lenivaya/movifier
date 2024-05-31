import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserCreateManyUserInputEnvelope } from "../inputs/MovieWatchedByUserCreateManyUserInputEnvelope";
import { MovieWatchedByUserCreateOrConnectWithoutUserInput } from "../inputs/MovieWatchedByUserCreateOrConnectWithoutUserInput";
import { MovieWatchedByUserCreateWithoutUserInput } from "../inputs/MovieWatchedByUserCreateWithoutUserInput";
import { MovieWatchedByUserScalarWhereInput } from "../inputs/MovieWatchedByUserScalarWhereInput";
import { MovieWatchedByUserUpdateManyWithWhereWithoutUserInput } from "../inputs/MovieWatchedByUserUpdateManyWithWhereWithoutUserInput";
import { MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput";
import { MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput";
import { MovieWatchedByUserWhereUniqueInput } from "../inputs/MovieWatchedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieWatchedByUserUpdateManyWithoutUserNestedInput", {})
export class MovieWatchedByUserUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [MovieWatchedByUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieWatchedByUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieWatchedByUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieWatchedByUserCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserWhereUniqueInput], {
    nullable: true
  })
  set?: MovieWatchedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieWatchedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieWatchedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWatchedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: MovieWatchedByUserUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieWatchedByUserScalarWhereInput[] | undefined;
}
