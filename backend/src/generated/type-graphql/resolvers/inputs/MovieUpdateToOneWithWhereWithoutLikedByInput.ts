import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateWithoutLikedByInput } from "../inputs/MovieUpdateWithoutLikedByInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieUpdateToOneWithWhereWithoutLikedByInput", {})
export class MovieUpdateToOneWithWhereWithoutLikedByInput {
  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutLikedByInput, {
    nullable: false
  })
  data!: MovieUpdateWithoutLikedByInput;
}
