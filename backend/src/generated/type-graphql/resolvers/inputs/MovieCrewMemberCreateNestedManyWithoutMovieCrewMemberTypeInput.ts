import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberCreateManyMovieCrewMemberTypeInputEnvelope } from "../inputs/MovieCrewMemberCreateManyMovieCrewMemberTypeInputEnvelope";
import { MovieCrewMemberCreateOrConnectWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberCreateOrConnectWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberCreateWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberCreateWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberWhereUniqueInput } from "../inputs/MovieCrewMemberWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberCreateNestedManyWithoutMovieCrewMemberTypeInput",
  {},
)
export class MovieCrewMemberCreateNestedManyWithoutMovieCrewMemberTypeInput {
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
  connect?: MovieCrewMemberWhereUniqueInput[] | undefined;
}
