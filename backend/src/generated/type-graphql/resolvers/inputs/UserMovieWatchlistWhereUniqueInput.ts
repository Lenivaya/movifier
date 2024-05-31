import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MovieRelationFilter } from "../inputs/MovieRelationFilter";
import { MovifierAppUserRelationFilter } from "../inputs/MovifierAppUserRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserMovieWatchlistUserIdMovieIdCompoundUniqueInput } from "../inputs/UserMovieWatchlistUserIdMovieIdCompoundUniqueInput";
import { UserMovieWatchlistWhereInput } from "../inputs/UserMovieWatchlistWhereInput";

@TypeGraphQL.InputType("UserMovieWatchlistWhereUniqueInput", {})
export class UserMovieWatchlistWhereUniqueInput {
  @TypeGraphQL.Field(_type => UserMovieWatchlistUserIdMovieIdCompoundUniqueInput, {
    nullable: true
  })
  userId_movieId?: UserMovieWatchlistUserIdMovieIdCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistWhereInput], {
    nullable: true
  })
  AND?: UserMovieWatchlistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistWhereInput], {
    nullable: true
  })
  OR?: UserMovieWatchlistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistWhereInput], {
    nullable: true
  })
  NOT?: UserMovieWatchlistWhereInput[] | undefined;

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
