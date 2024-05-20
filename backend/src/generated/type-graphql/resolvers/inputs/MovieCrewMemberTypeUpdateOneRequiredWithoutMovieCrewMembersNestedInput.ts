import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput } from "../inputs/MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput";
import { MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput } from "../inputs/MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput";
import { MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput } from "../inputs/MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput";
import { MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput } from "../inputs/MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput";
import { MovieCrewMemberTypeWhereUniqueInput } from "../inputs/MovieCrewMemberTypeWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput",
  {},
)
export class MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput {
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

  @TypeGraphQL.Field(
    (_type) => MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput,
    {
      nullable: true,
    },
  )
  upsert?: MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberTypeWhereUniqueInput, {
    nullable: true,
  })
  connect?: MovieCrewMemberTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(
    (_type) =>
      MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput,
    {
      nullable: true,
    },
  )
  update?:
    | MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput
    | undefined;
}
