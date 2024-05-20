import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingUpdateWithoutUserInput } from "../inputs/MovieRatingUpdateWithoutUserInput";
import { MovieRatingWhereUniqueInput } from "../inputs/MovieRatingWhereUniqueInput";

@TypeGraphQL.InputType("MovieRatingUpdateWithWhereUniqueWithoutUserInput", {})
export class MovieRatingUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieRatingWhereUniqueInput, {
    nullable: false
  })
  where!: MovieRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieRatingUpdateWithoutUserInput, {
    nullable: false
  })
  data!: MovieRatingUpdateWithoutUserInput;
}
