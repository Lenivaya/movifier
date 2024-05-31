import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieWhereInput } from "../inputs/MovieCrewMemberOnMovieWhereInput";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieListRelationFilter", {})
export class MovieCrewMemberOnMovieListRelationFilter {
  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieWhereInput, {
    nullable: true
  })
  every?: MovieCrewMemberOnMovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieWhereInput, {
    nullable: true
  })
  some?: MovieCrewMemberOnMovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieWhereInput, {
    nullable: true
  })
  none?: MovieCrewMemberOnMovieWhereInput | undefined;
}
