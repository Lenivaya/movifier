import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentCreateManyUserInputEnvelope } from "../inputs/MovieListCommentCreateManyUserInputEnvelope";
import { MovieListCommentCreateOrConnectWithoutUserInput } from "../inputs/MovieListCommentCreateOrConnectWithoutUserInput";
import { MovieListCommentCreateWithoutUserInput } from "../inputs/MovieListCommentCreateWithoutUserInput";
import { MovieListCommentScalarWhereInput } from "../inputs/MovieListCommentScalarWhereInput";
import { MovieListCommentUpdateManyWithWhereWithoutUserInput } from "../inputs/MovieListCommentUpdateManyWithWhereWithoutUserInput";
import { MovieListCommentUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MovieListCommentUpdateWithWhereUniqueWithoutUserInput";
import { MovieListCommentUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MovieListCommentUpsertWithWhereUniqueWithoutUserInput";
import { MovieListCommentWhereUniqueInput } from "../inputs/MovieListCommentWhereUniqueInput";

@TypeGraphQL.InputType("MovieListCommentUpdateManyWithoutUserNestedInput", {})
export class MovieListCommentUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field((_type) => [MovieListCommentCreateWithoutUserInput], {
    nullable: true,
  })
  create?: MovieListCommentCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieListCommentCreateOrConnectWithoutUserInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovieListCommentCreateOrConnectWithoutUserInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieListCommentUpsertWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  upsert?: MovieListCommentUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => MovieListCommentCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: MovieListCommentCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MovieListCommentWhereUniqueInput], {
    nullable: true,
  })
  set?: MovieListCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieListCommentWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: MovieListCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieListCommentWhereUniqueInput], {
    nullable: true,
  })
  delete?: MovieListCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieListCommentWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieListCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieListCommentUpdateWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  update?: MovieListCommentUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieListCommentUpdateManyWithWhereWithoutUserInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | MovieListCommentUpdateManyWithWhereWithoutUserInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [MovieListCommentScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MovieListCommentScalarWhereInput[] | undefined;
}
