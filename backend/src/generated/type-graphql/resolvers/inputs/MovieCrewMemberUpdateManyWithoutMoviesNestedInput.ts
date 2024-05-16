import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberCreateOrConnectWithoutMoviesInput } from "../inputs/MovieCrewMemberCreateOrConnectWithoutMoviesInput";
import { MovieCrewMemberCreateWithoutMoviesInput } from "../inputs/MovieCrewMemberCreateWithoutMoviesInput";
import { MovieCrewMemberScalarWhereInput } from "../inputs/MovieCrewMemberScalarWhereInput";
import { MovieCrewMemberUpdateManyWithWhereWithoutMoviesInput } from "../inputs/MovieCrewMemberUpdateManyWithWhereWithoutMoviesInput";
import { MovieCrewMemberUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/MovieCrewMemberUpdateWithWhereUniqueWithoutMoviesInput";
import { MovieCrewMemberUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/MovieCrewMemberUpsertWithWhereUniqueWithoutMoviesInput";
import { MovieCrewMemberWhereUniqueInput } from "../inputs/MovieCrewMemberWhereUniqueInput";

@TypeGraphQL.InputType("MovieCrewMemberUpdateManyWithoutMoviesNestedInput", {})
export class MovieCrewMemberUpdateManyWithoutMoviesNestedInput {
  @TypeGraphQL.Field((_type) => [MovieCrewMemberCreateWithoutMoviesInput], {
    nullable: true,
  })
  create?: MovieCrewMemberCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberCreateOrConnectWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovieCrewMemberCreateOrConnectWithoutMoviesInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberUpsertWithWhereUniqueWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  upsert?: MovieCrewMemberUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberWhereUniqueInput], {
    nullable: true,
  })
  set?: MovieCrewMemberWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: MovieCrewMemberWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberWhereUniqueInput], {
    nullable: true,
  })
  delete?: MovieCrewMemberWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieCrewMemberWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberUpdateWithWhereUniqueWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  update?: MovieCrewMemberUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberUpdateManyWithWhereWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | MovieCrewMemberUpdateManyWithWhereWithoutMoviesInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MovieCrewMemberScalarWhereInput[] | undefined;
}
