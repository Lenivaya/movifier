import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieListLikedByUserScalarWhereInput", {})
export class MovieListLikedByUserScalarWhereInput {
  @TypeGraphQL.Field(_type => [MovieListLikedByUserScalarWhereInput], {
    nullable: true
  })
  AND?: MovieListLikedByUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserScalarWhereInput], {
    nullable: true
  })
  OR?: MovieListLikedByUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserScalarWhereInput], {
    nullable: true
  })
  NOT?: MovieListLikedByUserScalarWhereInput[] | undefined;

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
}
