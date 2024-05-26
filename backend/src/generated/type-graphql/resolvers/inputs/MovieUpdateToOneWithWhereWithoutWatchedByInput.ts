import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateWithoutWatchedByInput } from "../inputs/MovieUpdateWithoutWatchedByInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieUpdateToOneWithWhereWithoutWatchedByInput", {})
export class MovieUpdateToOneWithWhereWithoutWatchedByInput {
  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutWatchedByInput, {
    nullable: false
  })
  data!: MovieUpdateWithoutWatchedByInput;
}
