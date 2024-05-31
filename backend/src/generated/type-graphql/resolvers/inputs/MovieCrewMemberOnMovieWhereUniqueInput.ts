import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput } from "../inputs/MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput";
import { MovieCrewMemberOnMovieWhereInput } from "../inputs/MovieCrewMemberOnMovieWhereInput";
import { MovieCrewMemberRelationFilter } from "../inputs/MovieCrewMemberRelationFilter";
import { MovieCrewMemberTypeRelationFilter } from "../inputs/MovieCrewMemberTypeRelationFilter";
import { MovieRelationFilter } from "../inputs/MovieRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieWhereUniqueInput", {})
export class MovieCrewMemberOnMovieWhereUniqueInput {
  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput, {
    nullable: true
  })
  movieId_movieCrewMemberId_movieCrewMemberTypeId?: MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieWhereInput], {
    nullable: true
  })
  AND?: MovieCrewMemberOnMovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieWhereInput], {
    nullable: true
  })
  OR?: MovieCrewMemberOnMovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieWhereInput], {
    nullable: true
  })
  NOT?: MovieCrewMemberOnMovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  movieId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  movieCrewMemberId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  movieCrewMemberTypeId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MovieRelationFilter, {
    nullable: true
  })
  movie?: MovieRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberRelationFilter, {
    nullable: true
  })
  crewMember?: MovieCrewMemberRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeRelationFilter, {
    nullable: true
  })
  movieCrewMemberType?: MovieCrewMemberTypeRelationFilter | undefined;
}
