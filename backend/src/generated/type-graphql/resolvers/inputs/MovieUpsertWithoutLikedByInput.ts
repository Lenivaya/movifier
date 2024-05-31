import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutLikedByInput } from "../inputs/MovieCreateWithoutLikedByInput";
import { MovieUpdateWithoutLikedByInput } from "../inputs/MovieUpdateWithoutLikedByInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieUpsertWithoutLikedByInput", {})
export class MovieUpsertWithoutLikedByInput {
  @TypeGraphQL.Field(_type => MovieUpdateWithoutLikedByInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutLikedByInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutLikedByInput, {
    nullable: false
  })
  create!: MovieCreateWithoutLikedByInput;

  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;
}
