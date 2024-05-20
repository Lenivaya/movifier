import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingCreateWithoutUserInput } from "../inputs/MovieRatingCreateWithoutUserInput";
import { MovieRatingUpdateWithoutUserInput } from "../inputs/MovieRatingUpdateWithoutUserInput";
import { MovieRatingWhereUniqueInput } from "../inputs/MovieRatingWhereUniqueInput";

@TypeGraphQL.InputType("MovieRatingUpsertWithWhereUniqueWithoutUserInput", {})
export class MovieRatingUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieRatingWhereUniqueInput, {
    nullable: false
  })
  where!: MovieRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieRatingUpdateWithoutUserInput, {
    nullable: false
  })
  update!: MovieRatingUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => MovieRatingCreateWithoutUserInput, {
    nullable: false
  })
  create!: MovieRatingCreateWithoutUserInput;
}
