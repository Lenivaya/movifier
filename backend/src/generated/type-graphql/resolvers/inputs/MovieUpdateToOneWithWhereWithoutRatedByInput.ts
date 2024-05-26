import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateWithoutRatedByInput } from "../inputs/MovieUpdateWithoutRatedByInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieUpdateToOneWithWhereWithoutRatedByInput", {})
export class MovieUpdateToOneWithWhereWithoutRatedByInput {
  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutRatedByInput, {
    nullable: false
  })
  data!: MovieUpdateWithoutRatedByInput;
}
