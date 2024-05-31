import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberCreateWithoutMoviesInput } from "../inputs/MovieCrewMemberCreateWithoutMoviesInput";
import { MovieCrewMemberWhereUniqueInput } from "../inputs/MovieCrewMemberWhereUniqueInput";

@TypeGraphQL.InputType("MovieCrewMemberCreateOrConnectWithoutMoviesInput", {})
export class MovieCrewMemberCreateOrConnectWithoutMoviesInput {
  @TypeGraphQL.Field(_type => MovieCrewMemberWhereUniqueInput, {
    nullable: false
  })
  where!: MovieCrewMemberWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: MovieCrewMemberCreateWithoutMoviesInput;
}
