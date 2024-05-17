import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutStudiosInput } from "../inputs/MovieCreateOrConnectWithoutStudiosInput";
import { MovieCreateWithoutStudiosInput } from "../inputs/MovieCreateWithoutStudiosInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutStudiosInput } from "../inputs/MovieUpdateManyWithWhereWithoutStudiosInput";
import { MovieUpdateWithWhereUniqueWithoutStudiosInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutStudiosInput";
import { MovieUpsertWithWhereUniqueWithoutStudiosInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutStudiosInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateManyWithoutStudiosNestedInput", {})
export class MovieUpdateManyWithoutStudiosNestedInput {
  @TypeGraphQL.Field((_type) => [MovieCreateWithoutStudiosInput], {
    nullable: true,
  })
  create?: MovieCreateWithoutStudiosInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCreateOrConnectWithoutStudiosInput], {
    nullable: true,
  })
  connectOrCreate?: MovieCreateOrConnectWithoutStudiosInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieUpsertWithWhereUniqueWithoutStudiosInput],
    {
      nullable: true,
    },
  )
  upsert?: MovieUpsertWithWhereUniqueWithoutStudiosInput[] | undefined;

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
    (_type) => [MovieUpdateWithWhereUniqueWithoutStudiosInput],
    {
      nullable: true,
    },
  )
  update?: MovieUpdateWithWhereUniqueWithoutStudiosInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieUpdateManyWithWhereWithoutStudiosInput], {
    nullable: true,
  })
  updateMany?: MovieUpdateManyWithWhereWithoutStudiosInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;
}
