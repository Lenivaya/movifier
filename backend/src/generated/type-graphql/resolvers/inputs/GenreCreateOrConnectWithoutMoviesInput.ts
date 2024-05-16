import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateWithoutMoviesInput } from "../inputs/GenreCreateWithoutMoviesInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType("GenreCreateOrConnectWithoutMoviesInput", {})
export class GenreCreateOrConnectWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => GenreWhereUniqueInput, {
    nullable: false,
  })
  where!: GenreWhereUniqueInput;

  @TypeGraphQL.Field((_type) => GenreCreateWithoutMoviesInput, {
    nullable: false,
  })
  create!: GenreCreateWithoutMoviesInput;
}
