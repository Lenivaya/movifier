import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput } from "../inputs/MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput";

@TypeGraphQL.InputType("MovieListLikedByUserCreateWithoutMovieListInput", {})
export class MovieListLikedByUserCreateWithoutMovieListInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput, {
    nullable: false
  })
  user!: MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput;
}
