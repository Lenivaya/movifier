import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutSpokenLanguagesInput } from "../inputs/MovieCreateWithoutSpokenLanguagesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateOrConnectWithoutSpokenLanguagesInput", {})
export class MovieCreateOrConnectWithoutSpokenLanguagesInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutSpokenLanguagesInput, {
    nullable: false
  })
  create!: MovieCreateWithoutSpokenLanguagesInput;
}
