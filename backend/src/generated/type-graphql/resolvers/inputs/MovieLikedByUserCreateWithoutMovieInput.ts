import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateNestedOneWithoutLikedMoviesInput } from "../inputs/MovifierAppUserCreateNestedOneWithoutLikedMoviesInput";

@TypeGraphQL.InputType("MovieLikedByUserCreateWithoutMovieInput", {})
export class MovieLikedByUserCreateWithoutMovieInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateNestedOneWithoutLikedMoviesInput, {
    nullable: false
  })
  user!: MovifierAppUserCreateNestedOneWithoutLikedMoviesInput;
}
