import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberUpdateWithoutMoviesInput } from "../inputs/MovieCrewMemberUpdateWithoutMoviesInput";
import { MovieCrewMemberWhereInput } from "../inputs/MovieCrewMemberWhereInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberUpdateToOneWithWhereWithoutMoviesInput",
  {},
)
export class MovieCrewMemberUpdateToOneWithWhereWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => MovieCrewMemberWhereInput, {
    nullable: true,
  })
  where?: MovieCrewMemberWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberUpdateWithoutMoviesInput, {
    nullable: false,
  })
  data!: MovieCrewMemberUpdateWithoutMoviesInput;
}
