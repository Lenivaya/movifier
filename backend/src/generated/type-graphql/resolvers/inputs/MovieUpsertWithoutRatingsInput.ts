import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutRatingsInput } from "../inputs/MovieCreateWithoutRatingsInput";
import { MovieUpdateWithoutRatingsInput } from "../inputs/MovieUpdateWithoutRatingsInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieUpsertWithoutRatingsInput", {})
export class MovieUpsertWithoutRatingsInput {
  @TypeGraphQL.Field(_type => MovieUpdateWithoutRatingsInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutRatingsInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutRatingsInput, {
    nullable: false
  })
  create!: MovieCreateWithoutRatingsInput;

  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;
}
