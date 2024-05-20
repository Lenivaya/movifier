import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutSpokenLanguagesInput } from "../inputs/MovieCreateNestedManyWithoutSpokenLanguagesInput";

@TypeGraphQL.InputType("MovieSpokenLanguageCreateInput", {})
export class MovieSpokenLanguageCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  language!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutSpokenLanguagesInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutSpokenLanguagesInput | undefined;
}
