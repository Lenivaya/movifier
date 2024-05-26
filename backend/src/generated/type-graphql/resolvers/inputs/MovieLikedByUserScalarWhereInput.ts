import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieLikedByUserScalarWhereInput", {})
export class MovieLikedByUserScalarWhereInput {
  @TypeGraphQL.Field(_type => [MovieLikedByUserScalarWhereInput], {
    nullable: true
  })
  AND?: MovieLikedByUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserScalarWhereInput], {
    nullable: true
  })
  OR?: MovieLikedByUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserScalarWhereInput], {
    nullable: true
  })
  NOT?: MovieLikedByUserScalarWhereInput[] | undefined;

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
}
