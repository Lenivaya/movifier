import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreWhereInput } from "../inputs/GenreWhereInput";

@TypeGraphQL.InputType("GenreListRelationFilter", {})
export class GenreListRelationFilter {
  @TypeGraphQL.Field(_type => GenreWhereInput, {
    nullable: true
  })
  every?: GenreWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenreWhereInput, {
    nullable: true
  })
  some?: GenreWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenreWhereInput, {
    nullable: true
  })
  none?: GenreWhereInput | undefined;
}
