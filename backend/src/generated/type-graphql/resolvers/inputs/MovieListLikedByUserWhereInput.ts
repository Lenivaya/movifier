import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { MovifierAppUserRelationFilter } from "../inputs/MovifierAppUserRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieListLikedByUserWhereInput", {})
export class MovieListLikedByUserWhereInput {
  @TypeGraphQL.Field(_type => [MovieListLikedByUserWhereInput], {
    nullable: true
  })
  AND?: MovieListLikedByUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserWhereInput], {
    nullable: true
  })
  OR?: MovieListLikedByUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserWhereInput], {
    nullable: true
  })
  NOT?: MovieListLikedByUserWhereInput[] | undefined;

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
  movieListId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListRelationFilter, {
    nullable: true
  })
  movieList?: MovieListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserRelationFilter, {
    nullable: true
  })
  user?: MovifierAppUserRelationFilter | undefined;
}
