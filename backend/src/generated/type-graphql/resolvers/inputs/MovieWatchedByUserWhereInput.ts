import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MovieRelationFilter } from "../inputs/MovieRelationFilter";
import { MovifierAppUserRelationFilter } from "../inputs/MovifierAppUserRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieWatchedByUserWhereInput", {})
export class MovieWatchedByUserWhereInput {
  @TypeGraphQL.Field(_type => [MovieWatchedByUserWhereInput], {
    nullable: true
  })
  AND?: MovieWatchedByUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserWhereInput], {
    nullable: true
  })
  OR?: MovieWatchedByUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserWhereInput], {
    nullable: true
  })
  NOT?: MovieWatchedByUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  movieId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MovieRelationFilter, {
    nullable: true
  })
  movie?: MovieRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserRelationFilter, {
    nullable: true
  })
  user?: MovifierAppUserRelationFilter | undefined;
}
