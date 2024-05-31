import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput } from "../inputs/MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput";
import { MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput } from "../inputs/MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput";
import { MovieUpdateOneRequiredWithoutCrewMembersNestedInput } from "../inputs/MovieUpdateOneRequiredWithoutCrewMembersNestedInput";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieUpdateInput", {})
export class MovieCrewMemberOnMovieUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneRequiredWithoutCrewMembersNestedInput, {
    nullable: true
  })
  movie?: MovieUpdateOneRequiredWithoutCrewMembersNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput, {
    nullable: true
  })
  crewMember?: MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput, {
    nullable: true
  })
  movieCrewMemberType?: MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput | undefined;
}
