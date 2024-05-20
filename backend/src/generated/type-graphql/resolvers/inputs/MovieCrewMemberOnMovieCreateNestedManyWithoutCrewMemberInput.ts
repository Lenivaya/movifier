import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieCreateManyCrewMemberInputEnvelope } from "../inputs/MovieCrewMemberOnMovieCreateManyCrewMemberInputEnvelope";
import { MovieCrewMemberOnMovieCreateOrConnectWithoutCrewMemberInput } from "../inputs/MovieCrewMemberOnMovieCreateOrConnectWithoutCrewMemberInput";
import { MovieCrewMemberOnMovieCreateWithoutCrewMemberInput } from "../inputs/MovieCrewMemberOnMovieCreateWithoutCrewMemberInput";
import { MovieCrewMemberOnMovieWhereUniqueInput } from "../inputs/MovieCrewMemberOnMovieWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberOnMovieCreateNestedManyWithoutCrewMemberInput",
  {},
)
export class MovieCrewMemberOnMovieCreateNestedManyWithoutCrewMemberInput {
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
  connect?: MovieCrewMemberOnMovieWhereUniqueInput[] | undefined;
}
