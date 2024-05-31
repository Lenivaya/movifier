import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserCreateManyMovieInput } from "../inputs/MovieLikedByUserCreateManyMovieInput";

@TypeGraphQL.InputType("MovieLikedByUserCreateManyMovieInputEnvelope", {})
export class MovieLikedByUserCreateManyMovieInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieLikedByUserCreateManyMovieInput], {
    nullable: false
  })
  data!: MovieLikedByUserCreateManyMovieInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
