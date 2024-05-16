import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutSpokenLanguagesInput } from "../inputs/MovieCreateOrConnectWithoutSpokenLanguagesInput";
import { MovieCreateWithoutSpokenLanguagesInput } from "../inputs/MovieCreateWithoutSpokenLanguagesInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutSpokenLanguagesInput } from "../inputs/MovieUpdateManyWithWhereWithoutSpokenLanguagesInput";
import { MovieUpdateWithWhereUniqueWithoutSpokenLanguagesInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutSpokenLanguagesInput";
import { MovieUpsertWithWhereUniqueWithoutSpokenLanguagesInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutSpokenLanguagesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateManyWithoutSpokenLanguagesNestedInput", {})
export class MovieUpdateManyWithoutSpokenLanguagesNestedInput {
  @TypeGraphQL.Field((_type) => [MovieCreateWithoutSpokenLanguagesInput], {
    nullable: true,
  })
  create?: MovieCreateWithoutSpokenLanguagesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCreateOrConnectWithoutSpokenLanguagesInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovieCreateOrConnectWithoutSpokenLanguagesInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieUpsertWithWhereUniqueWithoutSpokenLanguagesInput],
    {
      nullable: true,
    },
  )
  upsert?: MovieUpsertWithWhereUniqueWithoutSpokenLanguagesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieWhereUniqueInput], {
    nullable: true,
  })
  set?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieWhereUniqueInput], {
    nullable: true,
  })
  delete?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieUpdateWithWhereUniqueWithoutSpokenLanguagesInput],
    {
      nullable: true,
    },
  )
  update?: MovieUpdateWithWhereUniqueWithoutSpokenLanguagesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieUpdateManyWithWhereWithoutSpokenLanguagesInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | MovieUpdateManyWithWhereWithoutSpokenLanguagesInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [MovieScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;
}
