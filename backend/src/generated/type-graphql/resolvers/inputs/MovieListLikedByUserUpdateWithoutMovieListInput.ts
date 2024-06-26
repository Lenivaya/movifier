import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput } from "../inputs/MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput";

@TypeGraphQL.InputType("MovieListLikedByUserUpdateWithoutMovieListInput", {})
export class MovieListLikedByUserUpdateWithoutMovieListInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput, {
    nullable: true
  })
  user?: MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput | undefined;
}
