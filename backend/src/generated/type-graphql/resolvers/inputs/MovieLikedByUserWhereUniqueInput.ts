import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MovieLikedByUserUserIdMovieIdCompoundUniqueInput } from "../inputs/MovieLikedByUserUserIdMovieIdCompoundUniqueInput";
import { MovieLikedByUserWhereInput } from "../inputs/MovieLikedByUserWhereInput";
import { MovieRelationFilter } from "../inputs/MovieRelationFilter";
import { MovifierAppUserRelationFilter } from "../inputs/MovifierAppUserRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieLikedByUserWhereUniqueInput", {})
export class MovieLikedByUserWhereUniqueInput {
  @TypeGraphQL.Field(_type => MovieLikedByUserUserIdMovieIdCompoundUniqueInput, {
    nullable: true
  })
  userId_movieId?: MovieLikedByUserUserIdMovieIdCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserWhereInput], {
    nullable: true
  })
  AND?: MovieLikedByUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserWhereInput], {
    nullable: true
  })
  OR?: MovieLikedByUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserWhereInput], {
    nullable: true
  })
  NOT?: MovieLikedByUserWhereInput[] | undefined;

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
