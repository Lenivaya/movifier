import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingCreateManyUserInputEnvelope } from "../inputs/MovieRatingCreateManyUserInputEnvelope";
import { MovieRatingCreateOrConnectWithoutUserInput } from "../inputs/MovieRatingCreateOrConnectWithoutUserInput";
import { MovieRatingCreateWithoutUserInput } from "../inputs/MovieRatingCreateWithoutUserInput";
import { MovieRatingScalarWhereInput } from "../inputs/MovieRatingScalarWhereInput";
import { MovieRatingUpdateManyWithWhereWithoutUserInput } from "../inputs/MovieRatingUpdateManyWithWhereWithoutUserInput";
import { MovieRatingUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MovieRatingUpdateWithWhereUniqueWithoutUserInput";
import { MovieRatingUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MovieRatingUpsertWithWhereUniqueWithoutUserInput";
import { MovieRatingWhereUniqueInput } from "../inputs/MovieRatingWhereUniqueInput";

@TypeGraphQL.InputType("MovieRatingUpdateManyWithoutUserNestedInput", {})
export class MovieRatingUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field((_type) => [MovieRatingCreateWithoutUserInput], {
    nullable: true,
  })
  create?: MovieRatingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieRatingCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: MovieRatingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieRatingUpsertWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  upsert?: MovieRatingUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: MovieRatingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MovieRatingWhereUniqueInput], {
    nullable: true,
  })
  set?: MovieRatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieRatingWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: MovieRatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieRatingWhereUniqueInput], {
    nullable: true,
  })
  delete?: MovieRatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieRatingWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieRatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieRatingUpdateWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  update?: MovieRatingUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieRatingUpdateManyWithWhereWithoutUserInput],
    {
      nullable: true,
    },
  )
  updateMany?: MovieRatingUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieRatingScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MovieRatingScalarWhereInput[] | undefined;
}
