import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieWatchedByUserScalarWhereInput", {})
export class MovieWatchedByUserScalarWhereInput {
  @TypeGraphQL.Field(_type => [MovieWatchedByUserScalarWhereInput], {
    nullable: true
  })
  AND?: MovieWatchedByUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserScalarWhereInput], {
    nullable: true
  })
  OR?: MovieWatchedByUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserScalarWhereInput], {
    nullable: true
  })
  NOT?: MovieWatchedByUserScalarWhereInput[] | undefined;

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
