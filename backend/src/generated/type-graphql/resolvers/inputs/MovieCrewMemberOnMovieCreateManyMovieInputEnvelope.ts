import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieCreateManyMovieInput } from "../inputs/MovieCrewMemberOnMovieCreateManyMovieInput";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieCreateManyMovieInputEnvelope", {})
export class MovieCrewMemberOnMovieCreateManyMovieInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieCreateManyMovieInput], {
    nullable: false
  })
  data!: MovieCrewMemberOnMovieCreateManyMovieInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
