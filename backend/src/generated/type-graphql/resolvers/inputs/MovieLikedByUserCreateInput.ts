import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutLikedByInput } from "../inputs/MovieCreateNestedOneWithoutLikedByInput";
import { MovifierAppUserCreateNestedOneWithoutLikedMoviesInput } from "../inputs/MovifierAppUserCreateNestedOneWithoutLikedMoviesInput";

@TypeGraphQL.InputType("MovieLikedByUserCreateInput", {})
export class MovieLikedByUserCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovieCreateNestedOneWithoutLikedByInput, {
    nullable: false
  })
  movie!: MovieCreateNestedOneWithoutLikedByInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateNestedOneWithoutLikedMoviesInput, {
    nullable: false
  })
  user!: MovifierAppUserCreateNestedOneWithoutLikedMoviesInput;
}
