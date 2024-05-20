import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope } from "../inputs/MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope";
import { MovieCrewMemberOnMovieCreateOrConnectWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberOnMovieCreateOrConnectWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberOnMovieWhereUniqueInput } from "../inputs/MovieCrewMemberOnMovieWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberOnMovieCreateNestedManyWithoutMovieCrewMemberTypeInput",
  {},
)
export class MovieCrewMemberOnMovieCreateNestedManyWithoutMovieCrewMemberTypeInput {
  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput],
    {
      nullable: true,
    },
  )
  create?:
    | MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [
      MovieCrewMemberOnMovieCreateOrConnectWithoutMovieCrewMemberTypeInput,
    ],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovieCrewMemberOnMovieCreateOrConnectWithoutMovieCrewMemberTypeInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope,
    {
      nullable: true,
    },
  )
  createMany?:
    | MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope
    | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberOnMovieWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieCrewMemberOnMovieWhereUniqueInput[] | undefined;
}
