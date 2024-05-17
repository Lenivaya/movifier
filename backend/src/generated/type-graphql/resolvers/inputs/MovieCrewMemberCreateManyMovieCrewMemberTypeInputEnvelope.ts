import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberCreateManyMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberCreateManyMovieCrewMemberTypeInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberCreateManyMovieCrewMemberTypeInputEnvelope",
  {},
)
export class MovieCrewMemberCreateManyMovieCrewMemberTypeInputEnvelope {
  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberCreateManyMovieCrewMemberTypeInput],
    {
      nullable: false,
    },
  )
  data!: MovieCrewMemberCreateManyMovieCrewMemberTypeInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
