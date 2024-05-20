import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieUpdateManyWithoutMovieCrewMemberTypeNestedInput } from "../inputs/MovieCrewMemberOnMovieUpdateManyWithoutMovieCrewMemberTypeNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovieCrewMemberTypeUpdateInput", {})
export class MovieCrewMemberTypeUpdateInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(
    (_type) =>
      MovieCrewMemberOnMovieUpdateManyWithoutMovieCrewMemberTypeNestedInput,
    {
      nullable: true,
    },
  )
  movieCrewMembers?:
    | MovieCrewMemberOnMovieUpdateManyWithoutMovieCrewMemberTypeNestedInput
    | undefined;
}
