import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutStudiosInput } from "../inputs/MovieCreateWithoutStudiosInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateOrConnectWithoutStudiosInput", {})
export class MovieCreateOrConnectWithoutStudiosInput {
  @TypeGraphQL.Field((_type) => MovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieCreateWithoutStudiosInput, {
    nullable: false,
  })
  create!: MovieCreateWithoutStudiosInput;
}
