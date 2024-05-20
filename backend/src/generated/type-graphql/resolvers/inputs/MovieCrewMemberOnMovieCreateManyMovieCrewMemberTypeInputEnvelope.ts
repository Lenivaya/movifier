import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInput";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope", {})
export class MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInput], {
    nullable: false
  })
  data!: MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
