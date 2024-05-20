import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateWithoutRatingsInput } from "../inputs/MovieUpdateWithoutRatingsInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieUpdateToOneWithWhereWithoutRatingsInput", {})
export class MovieUpdateToOneWithWhereWithoutRatingsInput {
  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutRatingsInput, {
    nullable: false
  })
  data!: MovieUpdateWithoutRatingsInput;
}
