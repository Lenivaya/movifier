import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingCreateWithoutUserInput } from "../inputs/MovieRatingCreateWithoutUserInput";
import { MovieRatingWhereUniqueInput } from "../inputs/MovieRatingWhereUniqueInput";

@TypeGraphQL.InputType("MovieRatingCreateOrConnectWithoutUserInput", {})
export class MovieRatingCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieRatingWhereUniqueInput, {
    nullable: false
  })
  where!: MovieRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieRatingCreateWithoutUserInput, {
    nullable: false
  })
  create!: MovieRatingCreateWithoutUserInput;
}
