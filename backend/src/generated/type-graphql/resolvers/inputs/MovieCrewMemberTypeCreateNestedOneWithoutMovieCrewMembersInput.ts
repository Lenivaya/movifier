import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput } from "../inputs/MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput";
import { MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput } from "../inputs/MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput";
import { MovieCrewMemberTypeWhereUniqueInput } from "../inputs/MovieCrewMemberTypeWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput",
  {},
)
export class MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput {
  @TypeGraphQL.Field(
    (_type) => MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput,
    {
      nullable: true,
    },
  )
  create?: MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput
    | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberTypeWhereUniqueInput, {
    nullable: true,
  })
  connect?: MovieCrewMemberTypeWhereUniqueInput | undefined;
}
