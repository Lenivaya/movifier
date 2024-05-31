import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MovieCrewMemberOnMovieListRelationFilter } from "../inputs/MovieCrewMemberOnMovieListRelationFilter";
import { MovieCrewMemberWhereInput } from "../inputs/MovieCrewMemberWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieCrewMemberWhereUniqueInput", {})
export class MovieCrewMemberWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imdbId?: string | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberWhereInput], {
    nullable: true
  })
  AND?: MovieCrewMemberWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberWhereInput], {
    nullable: true
  })
  OR?: MovieCrewMemberWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberWhereInput], {
    nullable: true
  })
  NOT?: MovieCrewMemberWhereInput[] | undefined;

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
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  photoUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieListRelationFilter, {
    nullable: true
  })
  movies?: MovieCrewMemberOnMovieListRelationFilter | undefined;
}
