import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieScalarWhereInput", {})
export class MovieCrewMemberOnMovieScalarWhereInput {
  @TypeGraphQL.Field((_type) => [MovieCrewMemberOnMovieScalarWhereInput], {
    nullable: true,
  })
  AND?: MovieCrewMemberOnMovieScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberOnMovieScalarWhereInput], {
    nullable: true,
  })
  OR?: MovieCrewMemberOnMovieScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberOnMovieScalarWhereInput], {
    nullable: true,
  })
  NOT?: MovieCrewMemberOnMovieScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  movieId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  movieCrewMemberId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  movieCrewMemberTypeId?: StringFilter | undefined;
}
