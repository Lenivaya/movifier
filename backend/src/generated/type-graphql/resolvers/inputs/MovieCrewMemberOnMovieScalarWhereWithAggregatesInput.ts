import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieScalarWhereWithAggregatesInput", {})
export class MovieCrewMemberOnMovieScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MovieCrewMemberOnMovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MovieCrewMemberOnMovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MovieCrewMemberOnMovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  movieId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  movieCrewMemberId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  movieCrewMemberTypeId?: StringWithAggregatesFilter | undefined;
}
