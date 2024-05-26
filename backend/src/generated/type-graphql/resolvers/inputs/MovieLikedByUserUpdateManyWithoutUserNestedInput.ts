import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserCreateManyUserInputEnvelope } from "../inputs/MovieLikedByUserCreateManyUserInputEnvelope";
import { MovieLikedByUserCreateOrConnectWithoutUserInput } from "../inputs/MovieLikedByUserCreateOrConnectWithoutUserInput";
import { MovieLikedByUserCreateWithoutUserInput } from "../inputs/MovieLikedByUserCreateWithoutUserInput";
import { MovieLikedByUserScalarWhereInput } from "../inputs/MovieLikedByUserScalarWhereInput";
import { MovieLikedByUserUpdateManyWithWhereWithoutUserInput } from "../inputs/MovieLikedByUserUpdateManyWithWhereWithoutUserInput";
import { MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput";
import { MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput";
import { MovieLikedByUserWhereUniqueInput } from "../inputs/MovieLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikedByUserUpdateManyWithoutUserNestedInput", {})
export class MovieLikedByUserUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [MovieLikedByUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieLikedByUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieLikedByUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieLikedByUserCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserWhereUniqueInput], {
    nullable: true
  })
  set?: MovieLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: MovieLikedByUserUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieLikedByUserScalarWhereInput[] | undefined;
}
