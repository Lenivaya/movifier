import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieCreateManyCrewMemberInput } from "../inputs/MovieCrewMemberOnMovieCreateManyCrewMemberInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberOnMovieCreateManyCrewMemberInputEnvelope",
  {},
)
export class MovieCrewMemberOnMovieCreateManyCrewMemberInputEnvelope {
  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberOnMovieCreateManyCrewMemberInput],
    {
      nullable: false,
    },
  )
  data!: MovieCrewMemberOnMovieCreateManyCrewMemberInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
