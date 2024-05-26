import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutWatchedByInput } from "../inputs/MovieCreateWithoutWatchedByInput";
import { MovieUpdateWithoutWatchedByInput } from "../inputs/MovieUpdateWithoutWatchedByInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieUpsertWithoutWatchedByInput", {})
export class MovieUpsertWithoutWatchedByInput {
  @TypeGraphQL.Field(_type => MovieUpdateWithoutWatchedByInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutWatchedByInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutWatchedByInput, {
    nullable: false
  })
  create!: MovieCreateWithoutWatchedByInput;

  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;
}
