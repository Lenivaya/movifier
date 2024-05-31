import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingCreateManyUserInput } from "../inputs/MovieRatingCreateManyUserInput";

@TypeGraphQL.InputType("MovieRatingCreateManyUserInputEnvelope", {})
export class MovieRatingCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieRatingCreateManyUserInput], {
    nullable: false
  })
  data!: MovieRatingCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
