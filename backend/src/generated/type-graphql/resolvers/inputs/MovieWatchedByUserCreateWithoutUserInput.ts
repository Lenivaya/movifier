import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutWatchedByInput } from "../inputs/MovieCreateNestedOneWithoutWatchedByInput";

@TypeGraphQL.InputType("MovieWatchedByUserCreateWithoutUserInput", {})
export class MovieWatchedByUserCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovieCreateNestedOneWithoutWatchedByInput, {
    nullable: false
  })
  movie!: MovieCreateNestedOneWithoutWatchedByInput;
}
