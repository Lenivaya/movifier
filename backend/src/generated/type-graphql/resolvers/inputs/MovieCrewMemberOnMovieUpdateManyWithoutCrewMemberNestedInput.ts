import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieCreateManyCrewMemberInputEnvelope } from "../inputs/MovieCrewMemberOnMovieCreateManyCrewMemberInputEnvelope";
import { MovieCrewMemberOnMovieCreateOrConnectWithoutCrewMemberInput } from "../inputs/MovieCrewMemberOnMovieCreateOrConnectWithoutCrewMemberInput";
import { MovieCrewMemberOnMovieCreateWithoutCrewMemberInput } from "../inputs/MovieCrewMemberOnMovieCreateWithoutCrewMemberInput";
import { MovieCrewMemberOnMovieScalarWhereInput } from "../inputs/MovieCrewMemberOnMovieScalarWhereInput";
import { MovieCrewMemberOnMovieUpdateManyWithWhereWithoutCrewMemberInput } from "../inputs/MovieCrewMemberOnMovieUpdateManyWithWhereWithoutCrewMemberInput";
import { MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutCrewMemberInput } from "../inputs/MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutCrewMemberInput";
import { MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutCrewMemberInput } from "../inputs/MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutCrewMemberInput";
import { MovieCrewMemberOnMovieWhereUniqueInput } from "../inputs/MovieCrewMemberOnMovieWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberOnMovieUpdateManyWithoutCrewMemberNestedInput",
  {},
)
export class MovieCrewMemberOnMovieUpdateManyWithoutCrewMemberNestedInput {
  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberOnMovieCreateWithoutCrewMemberInput],
    {
      nullable: true,
    },
  )
  create?: MovieCrewMemberOnMovieCreateWithoutCrewMemberInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberOnMovieCreateOrConnectWithoutCrewMemberInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovieCrewMemberOnMovieCreateOrConnectWithoutCrewMemberInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [
      MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutCrewMemberInput,
    ],
    {
      nullable: true,
    },
  )
  upsert?:
    | MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutCrewMemberInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieCrewMemberOnMovieCreateManyCrewMemberInputEnvelope,
    {
      nullable: true,
    },
  )
  createMany?:
    | MovieCrewMemberOnMovieCreateManyCrewMemberInputEnvelope
    | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberOnMovieWhereUniqueInput], {
    nullable: true,
  })
  set?: MovieCrewMemberOnMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberOnMovieWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: MovieCrewMemberOnMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberOnMovieWhereUniqueInput], {
    nullable: true,
  })
  delete?: MovieCrewMemberOnMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberOnMovieWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieCrewMemberOnMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [
      MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutCrewMemberInput,
    ],
    {
      nullable: true,
    },
  )
  update?:
    | MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutCrewMemberInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [
      MovieCrewMemberOnMovieUpdateManyWithWhereWithoutCrewMemberInput,
    ],
    {
      nullable: true,
    },
  )
  updateMany?:
    | MovieCrewMemberOnMovieUpdateManyWithWhereWithoutCrewMemberInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberOnMovieScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MovieCrewMemberOnMovieScalarWhereInput[] | undefined;
}
