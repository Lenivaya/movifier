import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieCreateManyMovieInputEnvelope } from "../inputs/MovieCrewMemberOnMovieCreateManyMovieInputEnvelope";
import { MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput } from "../inputs/MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput";
import { MovieCrewMemberOnMovieCreateWithoutMovieInput } from "../inputs/MovieCrewMemberOnMovieCreateWithoutMovieInput";
import { MovieCrewMemberOnMovieWhereUniqueInput } from "../inputs/MovieCrewMemberOnMovieWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput",
  {},
)
export class MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput {
  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberOnMovieCreateWithoutMovieInput],
    {
      nullable: true,
    },
  )
  create?: MovieCrewMemberOnMovieCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieCrewMemberOnMovieCreateManyMovieInputEnvelope,
    {
      nullable: true,
    },
  )
  createMany?: MovieCrewMemberOnMovieCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberOnMovieWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieCrewMemberOnMovieWhereUniqueInput[] | undefined;
}
