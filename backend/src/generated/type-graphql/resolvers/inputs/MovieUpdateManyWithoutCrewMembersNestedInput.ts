import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutCrewMembersInput } from "../inputs/MovieCreateOrConnectWithoutCrewMembersInput";
import { MovieCreateWithoutCrewMembersInput } from "../inputs/MovieCreateWithoutCrewMembersInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutCrewMembersInput } from "../inputs/MovieUpdateManyWithWhereWithoutCrewMembersInput";
import { MovieUpdateWithWhereUniqueWithoutCrewMembersInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutCrewMembersInput";
import { MovieUpsertWithWhereUniqueWithoutCrewMembersInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutCrewMembersInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateManyWithoutCrewMembersNestedInput", {})
export class MovieUpdateManyWithoutCrewMembersNestedInput {
  @TypeGraphQL.Field((_type) => [MovieCreateWithoutCrewMembersInput], {
    nullable: true,
  })
  create?: MovieCreateWithoutCrewMembersInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCreateOrConnectWithoutCrewMembersInput], {
    nullable: true,
  })
  connectOrCreate?: MovieCreateOrConnectWithoutCrewMembersInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieUpsertWithWhereUniqueWithoutCrewMembersInput],
    {
      nullable: true,
    },
  )
  upsert?: MovieUpsertWithWhereUniqueWithoutCrewMembersInput[] | undefined;

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
    (_type) => [MovieUpdateWithWhereUniqueWithoutCrewMembersInput],
    {
      nullable: true,
    },
  )
  update?: MovieUpdateWithWhereUniqueWithoutCrewMembersInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieUpdateManyWithWhereWithoutCrewMembersInput],
    {
      nullable: true,
    },
  )
  updateMany?: MovieUpdateManyWithWhereWithoutCrewMembersInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;
}
