import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieListCommentScalarWhereInput", {})
export class MovieListCommentScalarWhereInput {
  @TypeGraphQL.Field(_type => [MovieListCommentScalarWhereInput], {
    nullable: true
  })
  AND?: MovieListCommentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListCommentScalarWhereInput], {
    nullable: true
  })
  OR?: MovieListCommentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListCommentScalarWhereInput], {
    nullable: true
  })
  NOT?: MovieListCommentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

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
  content?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  movieListId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
