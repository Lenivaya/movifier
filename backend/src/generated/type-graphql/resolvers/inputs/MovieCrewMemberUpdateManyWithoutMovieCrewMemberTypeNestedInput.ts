import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberCreateManyMovieCrewMemberTypeInputEnvelope } from "../inputs/MovieCrewMemberCreateManyMovieCrewMemberTypeInputEnvelope";
import { MovieCrewMemberCreateOrConnectWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberCreateOrConnectWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberCreateWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberCreateWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberScalarWhereInput } from "../inputs/MovieCrewMemberScalarWhereInput";
import { MovieCrewMemberUpdateManyWithWhereWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberUpdateManyWithWhereWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberWhereUniqueInput } from "../inputs/MovieCrewMemberWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberUpdateManyWithoutMovieCrewMemberTypeNestedInput",
  {},
)
export class MovieCrewMemberUpdateManyWithoutMovieCrewMemberTypeNestedInput {
  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberCreateWithoutMovieCrewMemberTypeInput],
    {
      nullable: true,
    },
  )
  create?: MovieCrewMemberCreateWithoutMovieCrewMemberTypeInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberCreateOrConnectWithoutMovieCrewMemberTypeInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovieCrewMemberCreateOrConnectWithoutMovieCrewMemberTypeInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [
      MovieCrewMemberUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput,
    ],
    {
      nullable: true,
    },
  )
  upsert?:
    | MovieCrewMemberUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieCrewMemberCreateManyMovieCrewMemberTypeInputEnvelope,
    {
      nullable: true,
    },
  )
  createMany?:
    | MovieCrewMemberCreateManyMovieCrewMemberTypeInputEnvelope
    | undefined;

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
    (_type) => [
      MovieCrewMemberUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput,
    ],
    {
      nullable: true,
    },
  )
  update?:
    | MovieCrewMemberUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [
      MovieCrewMemberUpdateManyWithWhereWithoutMovieCrewMemberTypeInput,
    ],
    {
      nullable: true,
    },
  )
  updateMany?:
    | MovieCrewMemberUpdateManyWithWhereWithoutMovieCrewMemberTypeInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MovieCrewMemberScalarWhereInput[] | undefined;
}
