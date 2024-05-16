import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieRatingScalarWhereInput", {})
export class MovieRatingScalarWhereInput {
  @TypeGraphQL.Field((_type) => [MovieRatingScalarWhereInput], {
    nullable: true,
  })
  AND?: MovieRatingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieRatingScalarWhereInput], {
    nullable: true,
  })
  OR?: MovieRatingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieRatingScalarWhereInput], {
    nullable: true,
  })
  NOT?: MovieRatingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  rating?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  movieId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;
}
