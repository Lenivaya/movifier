import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutRatedByInput } from "../inputs/MovieCreateWithoutRatedByInput";
import { MovieUpdateWithoutRatedByInput } from "../inputs/MovieUpdateWithoutRatedByInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieUpsertWithoutRatedByInput", {})
export class MovieUpsertWithoutRatedByInput {
  @TypeGraphQL.Field(_type => MovieUpdateWithoutRatedByInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutRatedByInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutRatedByInput, {
    nullable: false
  })
  create!: MovieCreateWithoutRatedByInput;

  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;
}
