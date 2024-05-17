import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStudioWhereInput } from "../inputs/MovieStudioWhereInput";

@TypeGraphQL.InputType("MovieStudioListRelationFilter", {})
export class MovieStudioListRelationFilter {
  @TypeGraphQL.Field((_type) => MovieStudioWhereInput, {
    nullable: true,
  })
  every?: MovieStudioWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieStudioWhereInput, {
    nullable: true,
  })
  some?: MovieStudioWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieStudioWhereInput, {
    nullable: true,
  })
  none?: MovieStudioWhereInput | undefined;
}
