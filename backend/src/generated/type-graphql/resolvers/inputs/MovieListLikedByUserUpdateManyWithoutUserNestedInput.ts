import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserCreateManyUserInputEnvelope } from "../inputs/MovieListLikedByUserCreateManyUserInputEnvelope";
import { MovieListLikedByUserCreateOrConnectWithoutUserInput } from "../inputs/MovieListLikedByUserCreateOrConnectWithoutUserInput";
import { MovieListLikedByUserCreateWithoutUserInput } from "../inputs/MovieListLikedByUserCreateWithoutUserInput";
import { MovieListLikedByUserScalarWhereInput } from "../inputs/MovieListLikedByUserScalarWhereInput";
import { MovieListLikedByUserUpdateManyWithWhereWithoutUserInput } from "../inputs/MovieListLikedByUserUpdateManyWithWhereWithoutUserInput";
import { MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput";
import { MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput";
import { MovieListLikedByUserWhereUniqueInput } from "../inputs/MovieListLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieListLikedByUserUpdateManyWithoutUserNestedInput", {})
export class MovieListLikedByUserUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [MovieListLikedByUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieListLikedByUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieListLikedByUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieListLikedByUserCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserWhereUniqueInput], {
    nullable: true
  })
  set?: MovieListLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieListLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieListLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieListLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: MovieListLikedByUserUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieListLikedByUserScalarWhereInput[] | undefined;
}
