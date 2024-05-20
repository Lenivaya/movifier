import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { MovieStudioWhereInput } from "../inputs/MovieStudioWhereInput";

@TypeGraphQL.InputType("MovieStudioWhereUniqueInput", {})
export class MovieStudioWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioWhereInput], {
    nullable: true
  })
  AND?: MovieStudioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioWhereInput], {
    nullable: true
  })
  OR?: MovieStudioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioWhereInput], {
    nullable: true
  })
  NOT?: MovieStudioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListRelationFilter, {
    nullable: true
  })
  movies?: MovieListRelationFilter | undefined;
}
