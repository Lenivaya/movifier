import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput } from "../inputs/MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput";
import { MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput } from "../inputs/MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieUpdateWithoutMovieInput", {})
export class MovieCrewMemberOnMovieUpdateWithoutMovieInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  order?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput, {
    nullable: true
  })
  crewMember?: MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput, {
    nullable: true
  })
  movieCrewMemberType?: MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput | undefined;
}
