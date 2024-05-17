import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreScalarWhereInput } from "../inputs/GenreScalarWhereInput";
import { GenreUpdateManyMutationInput } from "../inputs/GenreUpdateManyMutationInput";

@TypeGraphQL.InputType("GenreUpdateManyWithWhereWithoutMoviesInput", {})
export class GenreUpdateManyWithWhereWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => GenreScalarWhereInput, {
    nullable: false,
  })
  where!: GenreScalarWhereInput;

  @TypeGraphQL.Field((_type) => GenreUpdateManyMutationInput, {
    nullable: false,
  })
  data!: GenreUpdateManyMutationInput;
}
