import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingCreateManyMovieInput } from "../inputs/MovieRatingCreateManyMovieInput";

@TypeGraphQL.InputType("MovieRatingCreateManyMovieInputEnvelope", {})
export class MovieRatingCreateManyMovieInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieRatingCreateManyMovieInput], {
    nullable: false
  })
  data!: MovieRatingCreateManyMovieInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
